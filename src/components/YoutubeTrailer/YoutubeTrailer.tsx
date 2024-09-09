import MovieModel from '../../models/movieModel';
import './YoutubeTrailer.scss';

interface propsInterface {
  movie: MovieModel;
}

export default function YoutubeTrailer(props: propsInterface) {
  // https://www.youtube.com/embed/jhVq-hmY48Q
  const youtubeVideoId = props.movie.movieData.videos[0].split('=')[1];

  return (
    <iframe className='youtube-trailer' src={` https://www.youtube.com/embed/${youtubeVideoId}`} title={props.movie.movieData.originalTitle} frameBorder={0} />
  );
}