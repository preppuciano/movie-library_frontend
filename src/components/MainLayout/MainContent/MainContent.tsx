import './MainContent.scss';

interface propsInterface {
  children?: React.ReactNode;
  hasBackground: boolean;
}

export default function MainContent(props: propsInterface) {
  return (
    <div className={`main-content main-content--${props.hasBackground && 'background'}`}>
      {props.children}
    </div>
  );
}