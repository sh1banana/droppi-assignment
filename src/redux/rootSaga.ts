/** LIBRARY */
import {fork} from 'redux-saga/effects';
import { moviesSaga } from './movies/saga';
import { favoriteMoviesSaga } from './favoriteMovies/saga';

export default function* rootSaga() {
  yield fork(moviesSaga);
  yield fork(favoriteMoviesSaga)
}
