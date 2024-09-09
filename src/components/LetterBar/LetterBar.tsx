import { Link, useSearchParams } from 'react-router-dom';
import './LetterBar.scss';
import letters from '../../config/letters.json';

export default function LetterBar() {
  return (
    <div className='letter-bar'>
      {
        letters.map((e, index) => <LetterButton key={index} letter={e} />)
      }
    </div>
  );
}

interface LetterButtonPropsInterface {
  letter: {
    name: string;
    value: string;
    url: string;
  };
};

function LetterButton(props: LetterButtonPropsInterface) {
  const [searchParams] = useSearchParams();
  const letterQueryParams = searchParams.get('letter');

  function isActive(): boolean {
    if (letterQueryParams) {
      return letterQueryParams == props.letter.url;
    }
    return false;
  }

  return (
    <Link reloadDocument={true} to={`/movies?letter=${props.letter.url}`} className={isActive() ? 'letter-button active' : 'letter-button'}>{props.letter.name}</Link>
  );
}