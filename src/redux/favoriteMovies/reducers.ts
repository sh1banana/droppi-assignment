/** LIBRARY */
import { AnyAction } from "redux-saga";
import { favoriteMovieUpdateReducersAction } from "../types";
import { MovieItemType } from '~/const/types/movieItem';

interface favoriteMoviesInterface {
  data: MovieItemType[]
}

const initState = {
  data: []
}

const favoriteMoviesReducer = (state: favoriteMoviesInterface = initState, action: AnyAction) => {
  switch (action.type) {
    case favoriteMovieUpdateReducersAction:
      return {
        data: action.payload
      }
    default:
      return state;
  }
};

export default favoriteMoviesReducer;
