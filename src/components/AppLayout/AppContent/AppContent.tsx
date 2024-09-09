import './AppContent.scss';

interface propsInterface {
  children?: React.ReactNode;
}
export default function AppContent(props: propsInterface) {
  return (
    <div className='app-content'>
      {props.children}
    </div>
  );
}