import { useParams, useSearchParams } from "react-router-dom";
import { getMoviesQuery } from "../api/movieAPI";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { PaginationResponseInterface } from "../interfaces/PaginationResponse";
import MainLayout from "../layouts/MainLayout";
import MovieCollectionLayout from "../layouts/MovieCollectionLayout";
import MovieModel from "../models/movieModel";

export default function MoviesPage() {
  const [searchParams] = useSearchParams();
  const { pageNumber = '1' } = useParams();
  const letterQueryParams = searchParams.get('letter');

  const { data: response, error, isLoading } = useFetch<PaginationResponseInterface<MovieModel>>(() => getMoviesQuery({ page: Number(pageNumber), limit: 30, letter: letterQueryParams }));

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
        <MovieCollectionLayout movies={response.data} showLetterBar={true} pagination={response.pagination} />
      }
    </MainLayout>
  );
}