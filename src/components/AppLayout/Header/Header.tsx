import './Header.scss';
import logoAsset from '../../../assets/images/logo.png';
import NavButton from '../../NavButton';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <Link to={'/'} className='header-brand'>
        <div className='header-brand__logo'>
          <img src={logoAsset} />
        </div>
        <div className='header-brand__text'>Movie Library</div>
      </Link>
      <div className='header-navbar'>
        <NavButton to='/'>Home</NavButton>
        <NavButton to='/create-movie'>Agregar Película</NavButton>
        <NavButton to='/favorites'>Lista de deseos</NavButton>
      </div>
    </div>
  );
}