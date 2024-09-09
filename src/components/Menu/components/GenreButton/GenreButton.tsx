import { Link } from 'react-router-dom';
import './GenreButton.scss';

interface propsInterface {
  genre: {
    name: string;
    value: number;
    url: string;
  };
  quantity?: number;
}

export default function GenreButton(props: propsInterface) {
  return (
    <Link reloadDocument={true} to={`/movies/genre/${props.genre.url}`} className='genre-button'>
      <div className='genre-button__genre'>{props.genre.name}</div>
      {
        props.quantity && <div className='genre-button__quantity'>{props.quantity}</div>
      }
    </Link>
  );
}