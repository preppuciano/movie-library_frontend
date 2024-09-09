import MainContent from '../../components/MainLayout/MainContent';
import Sidebar from '../../components/MainLayout/Sidebar';
import './MainLayout.scss';

interface propsInterface {
  children?: React.ReactNode;
  hasBackground?: boolean;
}

export default function MainLayout(props: propsInterface) {
  return (
    <div className='main-layout'>
      <MainContent hasBackground={props.hasBackground ?? true}>
        {props.children}
      </MainContent>
      <Sidebar />
    </div>
  );
}