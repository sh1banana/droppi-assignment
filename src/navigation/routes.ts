/** COMMON */
import { RoutesName } from "~/const/enum/routesName";
/** SCREENS */
import ListAssignmentScreen from "~/screens/listAssignment";
import MovieDetailScreen from "~/screens/movieDetail";
import MoviesScreen from "~/screens/movies";
import FavoriteMoviesScreen from "~/screens/favoriteMovies";

const Routes = {
  authentication: {
    signIn: RoutesName.SignIn
  },
  main: {
    listAssignment: {
      name: RoutesName.ListAssignment,
      path: ListAssignmentScreen
    },
    movies: {
      name: RoutesName.Movies,
      path: MoviesScreen
    },
    movieDetail: {
      name: RoutesName.MoviesDetail,
      path: MovieDetailScreen
    },
    favoriteMovies: {
      name: RoutesName.FavoriteMovies,
      path: FavoriteMoviesScreen
    },
  }
 }

 export default Routes;
