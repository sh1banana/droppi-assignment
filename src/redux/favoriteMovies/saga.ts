/** LIBRARY */
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux-saga';
import { favoriteMovieGetListAction, favoriteMovieUpdateAction, favoriteMovieUpdateReducersAction} from '../types';
import { FavoriteMovieUpdateType } from '~/const/types/favoriteMovie';
import { apiGetListFavoriteMovies, apiUpdateFavoriteMovie } from './api';
import { MoviesGetListType } from '~/const/types/movies';
import { MovieItemType } from '~/const/types/movieItem';
import { Alert, Platform, ToastAndroid } from 'react-native';

function notifyMessage(msg: string) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  } else {
    Alert.alert(msg);
  }
}

function* getListFavoriteMovies(action: AnyAction): any {
  const { params, callback }: MoviesGetListType = action.payload;
  try {
    const res = yield call(apiGetListFavoriteMovies, params);
    if (res.status === 200) {
      let newData = [];
      const prevData: MovieItemType[] = yield select(state => state?.favoriteMovies?.data);
      if (params.page && params.page > 1) {
        newData = prevData?.concat?.(res?.data?.results || [])
      } else {
        newData = res?.data?.results || prevData || []
      }
      yield put({
        type: favoriteMovieUpdateReducersAction,
        payload: newData
      })
      callback(res?.data || null);
    }else{
      callback(null)
    }
  } catch (err) {
    callback(null)
  }
}

function* updateFavoriteMovie(action: AnyAction): any {
  const { params, callback }: FavoriteMovieUpdateType = action.payload;
  try {
    const res = yield call(apiUpdateFavoriteMovie, params);
    if (res?.data?.success) {
      notifyMessage(params?.favorite ? "Add favorite movie successful!" : "Remove favorite movie successful!")
      yield put({
        type: favoriteMovieGetListAction,
        payload: {
          params: {},
          callback: () => { }
        }
      })
      callback(res?.data || null);
    }else{
      notifyMessage("Server error, please try again!")
      callback(null)
    }
  } catch (err) {
    notifyMessage("Server error, please try again!")
    callback(null)
  }
}

export function* favoriteMoviesSaga() {
  yield takeEvery(favoriteMovieGetListAction, getListFavoriteMovies);
  yield takeEvery(favoriteMovieUpdateAction, updateFavoriteMovie);
}
