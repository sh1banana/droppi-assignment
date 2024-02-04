/** LIBRARY */
import { call, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux-saga';
import { movieGetDetailAction, movieGetListAction, movieGetListByKeywordAction } from '../types';
import { MovieGetDetailType, MoviesGetListType } from '~/const/types/movies';
import { apiGetListMovies, apiGetListMoviesByKeyword, apiGetMovieDetail } from './api';

function* getListMovies(action: AnyAction): any {
  const { params, callback }: MoviesGetListType = action.payload;
  try {
    const res = yield call(apiGetListMovies, params);
    if (res.status === 200) {
      callback(res?.data || null)
    }else{
      callback(null)
    }
  } catch (err) {
    callback(null)
  }
}

function* getMovieDetail(action: AnyAction): any {
  const { params, callback }: MovieGetDetailType = action.payload;
  try {
    const res = yield call(apiGetMovieDetail, params);
    if (res.status === 200) {
      callback(res?.data || null)
    }else{
      callback(null)
    }
  } catch (err) {
    callback(null)
  }
}

function* getListMoviesByKeyword(action: AnyAction): any {
  const { params, callback }: MoviesGetListType = action.payload;
  try {
    const res = yield call(apiGetListMoviesByKeyword, params);
    if (res.status === 200) {
      callback(res?.data || null)
    }else{
      callback(null)
    }
  } catch (err) {
    callback(null)
  }
}

export function* moviesSaga() {
  yield takeEvery(movieGetListAction, getListMovies);
  yield takeEvery(movieGetDetailAction, getMovieDetail);
  yield takeEvery(movieGetListByKeywordAction, getListMoviesByKeyword);
}
