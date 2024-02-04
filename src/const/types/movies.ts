export type MoviesFilterParamsType = {
  page?: number,
  limit?: number,
  query?: string
}

export type MoviesGetListType = {
  params: MoviesFilterParamsType,
  callback: (res: any) => void
}

export type MovieGetDetailType = {
  params: number,
  callback: (res: any) => void
}