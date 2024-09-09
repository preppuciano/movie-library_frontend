import './YearBadge.scss';

interface propsInterface {
  year: number;
}

export default function YearBadge(props: propsInterface) {
  return (
    <div className='year-badge'>{props.year}</div>
  );
}