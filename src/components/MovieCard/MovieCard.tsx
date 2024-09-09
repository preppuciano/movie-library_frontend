import { Link } from 'react-router-dom';
import MovieModel from '../../models/movieModel';
import './MovieCard.scss';
import LangsBadge from './components/LangsBadge';
import ResolutionBadge from './components/ResolutionBadge';
import YearBadge from './components/YearBadge';

interface propsInterface {
  movie: MovieModel;
}

export default function MovieCard(props: propsInterface) {

  function convertMBToGB(bytes: number): string {
    const bytesPerGB = 1073741824; // 1 GB = 2^30 bytes
    const gb = bytes / bytesPerGB;
    return `${parseFloat(gb.toFixed(2))} GB`;
  }

  return (
    <div className='movie-card'>
      <Link to={`/movies/${props.movie.id}`}>
        <div className='movie-card-cover'>
          <div className='movie-card-cover__metadata'>
            <ResolutionBadge width={props.movie.fileData.resolution.width} height={props.movie.fileData.resolution.height} />
            <YearBadge year={props.movie.year} />
          </div>
          <div className='movie-card-cover__languages'>
            <LangsBadge langs={props.movie.fileData.audios} />
          </div>
          <div className='movie-card-cover__image'>
            <img src={props.movie.imagenUrl} />
          </div>
        </div>
      </Link>
      <div className='movie-card-info'>
        <div className='movie-card-info__title'>{props.movie.movieData.title}</div>
        <div className='movie-card-info__size'>{convertMBToGB(props.movie.fileData.size)}</div>
      </div>
    </div>

  );
}