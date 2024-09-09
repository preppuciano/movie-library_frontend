import MovieModel from '../../models/movieModel';
import YoutubeTrailer from '../YoutubeTrailer';
import './MovieDetails.scss';

interface propsInterface {
  movie: MovieModel;
}

export default function MovieDetails(props: propsInterface) {

  return (
    <div>
      <div className='movie-details'>
        <div className='movie-details-cover'>
          <img src={props.movie.imagenUrl} />
        </div>
        <div className='movie-details-info'>
          <div className='movie-details-info__title'>{props.movie.movieData.title}</div>
          <div className='movie-details-info__originTitle'>{props.movie.movieData.originalTitle}</div>
          <div className='movie-details-info__overview'>{props.movie.movieData.overview}</div>
        </div>
        <div className='movie-details-trailer'>
          <YoutubeTrailer movie={props.movie}/>
        </div>
      </div>
    </div>
  );
}