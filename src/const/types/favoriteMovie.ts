export type FavoriteMovieUpdateParamsType = {
  media_type: string,
  media_id: number,
  favorite: boolean
}

export type FavoriteMovieUpdateType = {
  params: FavoriteMovieUpdateParamsType,
  callback: (res: any) => void
}