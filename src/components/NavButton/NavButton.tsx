import './NavButton.scss';
import { NavLink } from 'react-router-dom';

interface propsInterface {
  children?: React.ReactNode;
  color?: 'primary' | 'success' | 'error';
  to: string;
}
export default function NavButton({ children, color = 'primary', to }: propsInterface) {
  return (
    <NavLink to={to} className={({ isActive }) => `nav-button nav-button--${color}${isActive ? '--active' : ''}`}>{children}</NavLink>
  );
}