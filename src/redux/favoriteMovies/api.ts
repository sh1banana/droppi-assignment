/** LIBRARY */
import { FavoriteMovieUpdateParamsType } from "~/const/types/favoriteMovie";
import { MoviesFilterParamsType } from "~/const/types/movies";
import Api from "~/services/api";
import routesApi from "~/services/routesApi";

export const apiGetListFavoriteMovies = async (params: MoviesFilterParamsType) => {
  try {
    let res = await Api.get(routesApi.favoriteMovies.list, {
      params
    });
    console.log("===apiGetListFavoriteMovies===", res)
    return res;
  } catch (error) {
    console.log("===apiGetListFavoriteMovies===", error)
    return null
  }
}

export const apiUpdateFavoriteMovie = async (params: FavoriteMovieUpdateParamsType) => {
  try {
    let res = await Api.post(routesApi.favoriteMovies.update, params);
    console.log("===apiUpdateFavoriteMovie===", res)
    return res;
  } catch (error) {
    console.log("===apiUpdateFavoriteMovie===", error)
    return null
  }
}
