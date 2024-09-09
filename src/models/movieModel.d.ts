export enum MIMETypeEnum {
  MKV = 'video/x-matroska',
  AVI = 'video/x-msvideo',
  MP4 = 'video/mp4',
}

export enum LanguagesEnum {
  English = 'en',
  Spanish = 'es',
  German = 'de',
  French = 'fr',
  Swedish = 'sv',
  Chinese = 'zh', // Usualmente 'zh' para chino.
  Japanese = 'ja',
  Korean = 'ko',
  Italian = 'it',
  Polish = 'pl',
  Danish = 'da',
  Dutch = 'nl',
  Turkish = 'tr'
}

export default interface MovieModel {
  id: string;
  name: string;
  year: number;
  imagenName: string;
  imagenUrl: string; // virtuals
  isWatched: boolean;
  fileData: FileDataModel;
  movieData: MovieDataModel;
}

export interface FileDataModel {
  mimeType: MIMETypeEnum;
  name: string;
  size: number;
  duration: number;
  audios: LanguagesEnum[];
  subtitles: LanguagesEnum[];
  resolution: {
    width: number;
    height: number;
  };
}

export interface MovieDataModel {
  id: string;
  backdropPath: string;
  originalLanguage: LanguagesEnum;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
  runtime: number;
  imdbId: string;
  videos: string[];
  genres: {
    id: number;
    name: string;
  }[];
}