import { Configs } from "~/configs";

const routesApi = {
  movies: {
    list: `/3/discover/movie`,
    detail: (id: number) => `/3/movie/${id}`,
    search: `/3/search/movie`
  },
  favoriteMovies: {
    list: `/3/account/${Configs.accountId}/favorite/movies`,
    update: `/3/account/${Configs.accountId}/favorite`
  }
};

export default routesApi;