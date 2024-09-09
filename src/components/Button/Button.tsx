import './Button.scss';

interface propsInterface {
  children?: React.ReactNode;
  color?: 'primary' | 'success' | 'error';
  variant?: 'outlined' | 'contained';
}
export default function Button({ children, color = 'primary', variant = 'contained' }: propsInterface) {
  return (
    <button className={`btn btn--${color}--${variant}`}>{children}</button>
  );
}