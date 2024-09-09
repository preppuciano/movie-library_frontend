import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Loader from "../components/Loader";
import MovieDetails from "../components/MovieDetails";
import useFetch from "../hooks/useFetch";
import MovieModel from "../models/movieModel";
import { getMovieById } from "../api/movieAPI";

export default function MoviePage() {
  const { movieId = "" } = useParams();

  const { data: movie, error, isLoading } = useFetch<MovieModel>(() => getMovieById(movieId));

  useDocumentTitle(movie?.name)

  if (isLoading) {
    return (
      <MainLayout hasBackground={true}>
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
    <MainLayout hasBackground={true}>
      {movie && <MovieDetails movie={movie} />}
    </MainLayout>
  );
}