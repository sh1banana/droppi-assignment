/** LIBRARY */
import { combineReducers } from "redux";
import themeReducer from "./theme/reducers";
import favoriteMoviesReducer from "./favoriteMovies/reducers";

const reducers = combineReducers({
  theme: themeReducer,
  favoriteMovies: favoriteMoviesReducer
});

export default reducers