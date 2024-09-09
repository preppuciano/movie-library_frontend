import GenreButton from '../../Menu/components/GenreButton';
import './Sidebar.scss';
import Menu from '../../Menu';
import YearButton from '../../Menu/components/YearButton';
import genres from '../../../config/genres.json';
import years from '../../../config/years.json';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Menu>
        <Menu.Head>Generos</Menu.Head>
        <Menu.Body>
          {
            genres.map((e, index) => <GenreButton key={index} genre={e} />)
          }
        </Menu.Body>
      </Menu>
      <Menu>
        <Menu.Head>Años</Menu.Head>
        <Menu.Body flexWrap='wrap'>
          {
            years.map((e, index) => <YearButton key={index} year={e} />)
          }
        </Menu.Body>
      </Menu>
    </div >
  );
}