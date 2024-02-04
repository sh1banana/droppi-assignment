/** LIBRARY */
import { View, FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
/** COMPONENTS */
import CHeader from '~/components/CHeader';
import CMovieItem from '~/components/CMovieItem';
import CLoading from '~/components/CLoading';
/** COMMON */
import useTheme from '~/hooks/useTheme';
import { MovieItemType } from '~/const/types/movieItem';
import { favoriteMovieGetListAction, favoriteMovieUpdateAction } from '~/redux/types';
import { RoutesName } from '~/const/enum/routesName';
import { MoviesFilterParamsType } from '~/const/types/movies';
import { FavoriteMovieUpdateParamsType } from '~/const/types/favoriteMovie';
/** STYLES */
import styled from './style';

interface MoviesType {
  page: number,
  totalPages: number,
  totalResults: number
}

const FavoriteMoviesScreen = (props: any) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const favoriteMovies: MovieItemType[] = useSelector((state: RootState) => state.favoriteMovies.data);

  const [loading, setLoading] = useState<boolean>(true);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<MoviesType>({
    page: 1,
    totalPages: 1,
    totalResults: 0
  });

  const styles = useMemo(() => {
    return styled(theme.colors);
  }, [theme.mode]);

  /** FUNCTIONS */
  const getListMovies = (isRefreshing: boolean = false) => {
    const params: MoviesFilterParamsType = {
      page: isRefreshing ? 1 : data.page,
    }

    dispatch({
      type: favoriteMovieGetListAction,
      payload: {
        params,
        callback: (res: any) => {
          let newResults = data;
          if (res) {
            newResults = {
              page: res.page ?? newResults.page,
              totalPages: res?.total_pages ?? newResults.totalPages,
              totalResults: res?.total_results ?? newResults.totalResults
            }
          }
          setData(newResults);
          setLoading(false);
          setLoadMore(false);
          setRefreshing(false);
        }
      }
    })
  }

  const onLoadMore = () => {
    if (data.page < data.totalPages) {
      const newData = {
        ...data,
        page: data.page + 1
      }
      setData(newData);
    }
  }

  const onRefresh = () => {
    setRefreshing(true);
    getListMovies(true);
  }

  const onPressItem = (id: number) => {
    props?.navigation?.navigate?.(RoutesName.MoviesDetail, {
      id
    })
  }

  const onUpdateFavoriteMovie = (id: number, isFavorite: boolean) => {
    const params: FavoriteMovieUpdateParamsType = {
      media_type: "movie",
      media_id: id,
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

  const renderItem = ({ item }: ListRenderItemInfo<MovieItemType>) => {
    return (
      <CMovieItem
        item={item}
        isFavorite={true}
        onPress={onPressItem}
        onPressFavorite={() => onUpdateFavoriteMovie(item.id, true)}
      />
    )
  }

  /** LIFE CYCLE */
  useEffect(() => {
    setLoading(false)
  }, []);

  useEffect(() => {
    if (data.page > 1 && !loadMore) {
      setLoadMore(true);
      getListMovies();
    }
  }, [data.page]);

  /** RENDER */
  return (
    <View style={styles.container}>
      <CHeader
        hasBack
        title={"Favorite"}
      />
      <View style={styles.content}>
        {loading ?
          <CLoading />
        :
          <FlatList style={styles.listMovies}
            contentContainerStyle={styles.scrollContent}
            data={favoriteMovies}
            renderItem={renderItem}
            keyExtractor={(item: MovieItemType) => item.id.toString()}
            onEndReachedThreshold={0.05}
            onEndReached={onLoadMore}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={theme.colors.primary}
              />
            }
          />
        }
      </View>
    </View>
  )
}

export default FavoriteMoviesScreen;