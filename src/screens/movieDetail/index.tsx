/** LIBRARY */
import { View, Text, Animated, ScrollView } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faGlobe, faStar, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { RootState } from '~/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
/** COMPONENTS */
import CHeader from '~/components/CHeader';
import CImage from '~/components/CImage';
import CLoading from '~/components/CLoading';
/** COMMON */
import useTheme from '~/hooks/useTheme';
import { Colors } from '~/const/enum/colors';
import { Configs, Devices } from '~/configs';
import { MovieItemType } from '~/const/types/movieItem';
import { favoriteMovieUpdateAction, movieGetDetailAction } from '~/redux/types';
import { FavoriteMovieUpdateParamsType } from '~/const/types/favoriteMovie';
/** STYLES */
import styled from './style';

const maxHeightBackdrop = Devices.sH('35%');

const MovieDetailScreen = (props: any) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const favoriteMovies: MovieItemType[] = useSelector((state: RootState) => state.favoriteMovies.data);

  const [loading, setLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<MovieItemType>();
  const [scrollY, setScrollY] = useState<Animated.AnimatedValue>(new Animated.Value(0));

  const styles = useMemo(() => {
    return styled(theme.colors);
  }, [theme.mode]);

  const isFavorite = useMemo(() => {
    return favoriteMovies?.some?.(f => f.id === movie?.id);
  }, [movie, favoriteMovies]);

  let imageOpacity = scrollY.interpolate({
    inputRange: [0, (maxHeightBackdrop - (insets.top + Configs.headerHeight))],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  let headerOpacity = scrollY.interpolate({
    inputRange: [0, (maxHeightBackdrop - (insets.top + Configs.headerHeight))],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  /** FUNCTIONS */
  const getMovie = () => {
    dispatch({
      type: movieGetDetailAction,
      payload: {
        params: props?.route?.params?.id,
        callback: (res: MovieItemType) => {
          setMovie(res || null)
          setLoading(false);
        }
      }
    })
  }

  const onUpdateFavoriteMovie = () => {
    if (loading) return;
    const params: FavoriteMovieUpdateParamsType = {
      media_type: "movie",
      media_id: props?.route?.params?.id,
      favorite: !isFavorite
    }

    dispatch({
      type: favoriteMovieUpdateAction,
      payload: {
        params,
        callback: (res: any) => {

        }
      }
    })
  }

  /** LIFE CYCLE */
  useEffect(() => {
    getMovie();
  }, []);

  /** RENDER */
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.headerFixedContainer, { opacity: headerOpacity, borderBottomWidth: !headerOpacity ? .3 : 0 }]}>
        <CHeader 
          hasBack
          title={movie?.title}
          hasBorder={false}
          hasRight
          iconRight={isFavorite ? faHeartSolid : faHeart}
          iconRightColor={isFavorite ? Colors.coralRed : theme.colors.onSurface}
          onPressRight={onUpdateFavoriteMovie}
        />
      </Animated.View>
      {loading ?
        <CLoading />
      :
        <ScrollView style={[styles.scrollContent, { height: Devices.sH('100%') }]}
          scrollEventThrottle={16}
          onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: false }
          )}
        >
          <Animated.View style={[styles.animatedImg, { opacity: imageOpacity }]}>
            <View style={[styles.headerFixedContainer, { backgroundColor: 'transparent' }]}>
              <CHeader 
                hasBack
                hasTransparent
                hasBorder={false}
                hasRight
                iconRight={isFavorite ? faHeartSolid : faHeart}
                iconRightColor={isFavorite ? Colors.coralRed : Colors.white}
                onPressRight={onUpdateFavoriteMovie}
              />
            </View>
            <CImage
              source={{ uri: `${Configs.baseUrlImage}${movie?.backdrop_path}` }} 
              style={styles.imgBanner}
            />
          </Animated.View>
          <View style={styles.block}>
            <View style={styles.mainInfo}>
              <CImage
                source={{ uri: `${Configs.baseUrlImage}${movie?.poster_path}` }} 
                style={styles.imgPoster}
              />
              <View style={styles.mainInfoContent}>
                <Text style={styles.txtTitle}>{movie?.title}</Text>
                <View style={styles.genres}>
                  <Text style={[styles.txtSub]}>{movie?.genres?.map?.(f => f.name)?.join?.(", ") || ""}</Text>
                </View>
                <View style={styles.homepage}>
                  <FontAwesomeIcon style={{ marginTop: Devices.pixelRatio(1.5) }} icon={faGlobe} size={Devices.pixelRatio(12)} color={theme.colors.onSurface} />
                  <Text style={[styles.txtSub, { paddingLeft: Devices.pixelRatio(4) }]}>{movie?.homepage || "--"}</Text>
                </View>
                <View style={styles.mainInfoContentBottom}>
                  <View style={styles.view}>
                    <FontAwesomeIcon icon={faEye} size={Devices.pixelRatio(12)} color={theme.colors.onPlaceholder} />
                    <Text style={[styles.txtSub, { paddingLeft: Devices.pixelRatio(4) }]}>{movie?.popularity}</Text>
                  </View>
                  <View style={styles.rating}>
                    <FontAwesomeIcon icon={faStar} size={Devices.pixelRatio(12)} color={Colors.cadmiumOrange} />
                    <Text style={[styles.txtSub, { paddingLeft: Devices.pixelRatio(4) }]}>{`${movie?.vote_average?.toFixed(0)}/10  (${movie?.vote_count} reviews)`}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.subInfo}>
              <View style={[styles.subInfoItem, { borderRightWidth: .5 }]}>
                <Text style={[styles.txtSub, { textAlign: "center" }]}>{"Release date"}</Text>
                <Text style={styles.txtSubInfo}>{movie?.release_date || "--"}</Text>
              </View>
              <View style={styles.subInfoItem}>
                <Text style={[styles.txtSub, { textAlign: "center" }]}>{"Language"}</Text>
                <Text style={styles.txtSubInfo}>{movie?.spoken_languages?.[0]?.name || "--"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.block}>
            <View style={styles.blockHeader}>
              <Text style={styles.txtTitle}>{"Description"}</Text>
            </View>
            <Text style={styles.txtContent}>{movie?.overview || "--"}</Text>
          </View>
        </ScrollView>
      }
    </View>
  )
}

export default MovieDetailScreen;