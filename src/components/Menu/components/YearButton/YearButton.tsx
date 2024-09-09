import { Link } from 'react-router-dom';
import './YearButton.scss';

interface propsInterface {
  year: {
    name: string;
    value: number;
    url: string;
  };
}

export default function YearButton(props: propsInterface) {
  return (
    <Link reloadDocument={true} to={`/movies/year/${props.year.url}`} className='year-button'>
      {props.year.name}
    </Link>
  );
}