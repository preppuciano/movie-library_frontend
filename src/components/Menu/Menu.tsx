import './Menu.scss';

interface menuPropsInterface {
  children?: React.ReactNode;
}

export function Menu(props: menuPropsInterface) {
  return (
    <div className='menu'>{props.children}</div>
  );
}

interface menuHeadPropsInterface {
  children?: React.ReactNode;
}

function MenuHead(props: menuHeadPropsInterface) {
  return (
    <div className='menu-head'>{props.children}</div>
  );
}

interface menuBodyPropsInterface {
  children?: React.ReactNode;
  flexWrap?: 'wrap' | 'nowrap';
}

function MenuBody({ children, flexWrap = 'nowrap' }: menuBodyPropsInterface) {
  return (
    <div className={`menu-body menu-body--${flexWrap}`}>{children}</div>
  );
}

export default Object.assign(Menu, { Head: MenuHead, Body: MenuBody });