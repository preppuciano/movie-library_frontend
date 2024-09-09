import LetterBar from '../../components/LetterBar';
import MovieCard from '../../components/MovieCard';
import Paginator from '../../components/Paginator';
import { PaginationInterface } from '../../interfaces/PaginationResponse';
import MovieModel from '../../models/movieModel';
import './MovieCollectionLayout.scss';

interface PropsInterface {
  basePath?: string; 
  showLetterBar: boolean;
  pagination?: PaginationInterface;
  movies: MovieModel[];
}

export default function MovieCollectionLayout(props: PropsInterface) {
  return (
    <div className='movie-collection-layout'>
      {
        props.showLetterBar &&
        <div className='movie-collection-layout__bar'>
          <LetterBar />
        </div>
      }

      <div className='movie-collection-layout__grid'>
        {props.movies.map((e, index) => <MovieCard key={index} movie={e} />)}
      </div>

      {
        props.pagination &&
        <div className='movie-collection-layout__paginator'>
          <Paginator basePath={props.basePath} pagination={props.pagination} />
        </div>
      }
    </div>
  );
}