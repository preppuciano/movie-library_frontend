import { useParams } from "react-router-dom";
import { getMoviesQuery } from "../api/movieAPI";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { PaginationResponseInterface } from "../interfaces/PaginationResponse";
import MainLayout from "../layouts/MainLayout";
import MovieCollectionLayout from "../layouts/MovieCollectionLayout";
import MovieModel from "../models/movieModel";
import { getGenreValueuByGenreUrl } from "../utils/utils";

export default function MoviesGenrePage() {
  const { genre } = useParams();

  const { pageNumber = '1' } = useParams();

  const { data: response, error, isLoading } = useFetch<PaginationResponseInterface<MovieModel>>(() => getMoviesQuery({ page: Number(pageNumber), limit: 30, genre: getGenreValueuByGenreUrl(genre) }));

  if (isLoading) {
    return (
      <MainLayout hasBackground={false}>
        <Loader />
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout hasBackground={true}>
        <p>ERROR: {error}</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout hasBackground={false}>
      {
        response &&
        <MovieCollectionLayout movies={response.data} showLetterBar={false} pagination={response.pagination} />
      }
    </MainLayout>
  );
}