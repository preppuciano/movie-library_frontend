import { PaginationResponseInterface } from "../interfaces/PaginationResponse";
import MovieModel from "../models/movieModel";
import { apiVersion, basePath } from "./config";

export async function getMoviesQuery({ page, limit, genre, year, letter }: { page: number, limit: number, genre?: number, year?: number, letter?: string | null }): Promise<PaginationResponseInterface<MovieModel>> {

  const params: any = {};

  if (page) params['page'] = page;
  if (limit) params['limit'] = limit;
  if (genre) params['genre'] = genre;
  if (year) params['year'] = year;
  if (letter) params['letter'] = letter;

  const queryParams = new URLSearchParams(params).toString();

  const response = await fetch(`${basePath}/api/${apiVersion}/movies?${queryParams}`);
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }
  const result = await response.json();
  return { data: result.data, pagination: result.pagination };
}

export async function getMovieById(id: string): Promise<MovieModel> {
  const response = await fetch(`${basePath}/api/${apiVersion}/movies/${id}`);
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }
  const result = await response.json();
  return result.data;
}