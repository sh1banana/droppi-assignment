/** LIBRARY */
import { View, FlatList, ListRenderItemInfo, RefreshControl, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useDebouncedCallback } from 'use-debounce';
import { RootState } from '~/redux/store';
/** COMPONENTS */
import CHeader from '~/components/CHeader';
import CMovieItem from '~/components/CMovieItem';
import CLoading from '~/components/CLoading';
/** COMMON */
import useTheme from '~/hooks/useTheme';
import { MovieItemType } from '~/const/types/movieItem';
import { favoriteMovieUpdateAction, movieGetListAction, movieGetListByKeywordAction } from '~/redux/types';
import { RoutesName } from '~/const/enum/routesName';
import { MoviesFilterParamsType } from '~/const/types/movies';
import { Devices } from '~/configs';
import { FavoriteMovieUpdateParamsType } from '~/const/types/favoriteMovie';
/** STYLES */
import styled from './style';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

interface MoviesType {
  page: number,
  results: MovieItemType[],
  totalPages: number,
  totalResults: number
}

const MoviesScreen = (props: any) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const favoriteMovies: MovieItemType[] = useSelector((state: RootState) => state.favoriteMovies.data);

  const [loading, setLoading] = useState<boolean>(true);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<MoviesType>({
    page: 1,
    results: [],
    totalPages: 1,
    totalResults: 0
  });
  const [search, setSearch] = useState<string>("")

  const styles = useMemo(() => {
    return styled(theme.colors);
  }, [theme.mode]);

  const debounced = useDebouncedCallback(
    (value) => {
      setSearch(value);
    },
    200
  );

  /** FUNCTIONS */
  const getListMovies = (isRefreshing: boolean = false) => {
    const params: MoviesFilterParamsType = {
      page: isRefreshing ? 1 : data.page,
      limit: 20,
      query: search
    }

    dispatch({
      type: search.trim() === "" ? movieGetListAction : movieGetListByKeywordAction,
      payload: {
        params,
        callback: (res: any) => {
          let newResults = data;
          if (res) {
            newResults = {
              page: res.page ?? newResults.page,
              results: params.page === 1 ? res.results : [...newResults.results, ...res.results],
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

  const onPressFavorite = () => {
    props?.navigation?.navigate?.(RoutesName.FavoriteMovies)
  }

  const renderItem = ({ item }: ListRenderItemInfo<MovieItemType>) => {
    const isFavorite = favoriteMovies.some(f => f.id === item.id);
    return (
      <CMovieItem
        item={item}
        isFavorite={isFavorite}
        onPress={onPressItem}
        onPressFavorite={() => onUpdateFavoriteMovie(item.id, isFavorite)}
      />
    )
  }

  /** LIFE CYCLE */
  useEffect(() => {
    getListMovies();
  }, [search]);

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
        title={"Movies"}
        hasRight
        iconRight={faHeart}
        onPressRight={onPressFavorite}
      />
      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput}
            placeholder={"Search movies"}
            defaultValue={search}
            onChangeText={debounced}
          />
          {search?.trim() !== "" &&
            <TouchableOpacity activeOpacity={.5}
              style={styles.buttonClearSearch}
              onPress={() => setSearch("")}
            >
              <FontAwesomeIcon icon={faCircleXmark} size={Devices.pixelRatio(14)} color={theme.colors.onPlaceholder} />
            </TouchableOpacity>
          }
        </View>
        {loading ?
          <CLoading />
        :
          <FlatList style={styles.listMovies}
            contentContainerStyle={styles.scrollContent}
            data={data.results}
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

export default MoviesScreen;