/** LIBRARY */
import { MoviesFilterParamsType } from "~/const/types/movies";
import Api from "~/services/api";
import routesApi from "~/services/routesApi";

export const apiGetListMovies = async (params: MoviesFilterParamsType) => {
  try {
    let res = await Api.get(routesApi.movies.list, {
      params
    });
    console.log("===apiGetListMovies===", res)
    return res;
  } catch (error) {
    console.log("===apiGetListMovies===", error)
    return null
  }
}

export const apiGetMovieDetail = async (id: number) => {
  try {
    let res = await Api.get(routesApi.movies.detail(id));
    console.log("===apiGetMovieDetail===", res)
    return res;
  } catch (error) {
    console.log("===apiGetMovieDetail===", error)
    return null
  }
}

export const apiGetListMoviesByKeyword = async (params: MoviesFilterParamsType) => {
  try {
    let res = await Api.get(routesApi.movies.search, {
      params
    });
    console.log("===apiGetListMoviesByKeyword===", res)
    return res;
  } catch (error) {
    console.log("===apiGetListMoviesByKeyword===", error)
    return null
  }
}