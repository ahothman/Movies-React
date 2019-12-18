export interface PostType {
  title: string;
  imageUrl: string;
}

export interface SeriesType {
  series: PostType[];
  programType: "series";
}

export interface MoviesType {
  series: PostType[];
  programType: "movie";
}
