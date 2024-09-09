import { Link, useParams, useSearchParams } from 'react-router-dom';
import { PaginationInterface } from '../../interfaces/PaginationResponse';
import './Paginator.scss';

interface PropsInterface {
  basePath?: string;
  pagination: PaginationInterface;
};

export default function Paginator(props: PropsInterface): React.ReactNode {
  const config = {
    maxPageItem: 5
  }

  function generateTo(number: number): string {
    return props.basePath ? `${props.basePath}/page/${number}` : `page/${number}`;
  }

  function getNumbersPage() {
    const leftCountIdeal = Math.floor((config.maxPageItem - 1) / 2);
    const rightCountIdeal = Math.ceil((config.maxPageItem - 1) / 2);

    let rightCountExtra = Math.max(0, leftCountIdeal - props.pagination.page + 1);
    let leftCountExtra = Math.max(0, rightCountIdeal - props.pagination.totalPages + props.pagination.page);

    let leftPages = [];
    for (let i = 1; i <= leftCountIdeal + leftCountExtra; i++) {
      const page = props.pagination.page - i;
      if (page < 1) break;
      leftPages.push(page);
    }

    let rightPages = [];
    for (let i = 1; i <= rightCountIdeal + rightCountExtra; i++) {
      const page = props.pagination.page + i;
      if (page > props.pagination.totalPages) break;
      rightPages.push(page);
    }

    return [...leftPages, props.pagination.page, ...rightPages].sort((a, b) => a - b);
  }

  return (
    <div className='paginator'>
      <div className='paginator__text'>
        Página {`${props.pagination.page} de ${props.pagination.totalPages}`}
      </div>
      <div className='paginator__numbers'>
        {
          !getNumbersPage().includes(1) && <PageNumberButton to={generateTo(1)} number={'<<'} />
        }
        {
          getNumbersPage().map((e, index) => <PageNumberButton key={index} number={String(e)} to={generateTo(e)} />)
        }
        {
          !getNumbersPage().includes(props.pagination.totalPages) && <PageNumberButton to={generateTo(props.pagination.totalPages)} number={'>>'} />
        }
      </div>
    </div>
  );
}

function PageNumberButton({ number, to = `page/${number}` }: { number: string, to?: string }): React.ReactNode {
  const [searchParams] = useSearchParams();
  const { pageNumber = "1" } = useParams();

  return (
    <Link reloadDocument={true} to={`${to}?${searchParams.toString()}`} className={pageNumber == number ? 'page-number-button active' : 'page-number-button'}>
      {number}
    </Link>
  );
}