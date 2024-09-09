import AppContent from '../../components/AppLayout/AppContent';
import Footer from '../../components/AppLayout/Footer';
import Header from '../../components/AppLayout/Header';
import './AppLayout.scss';
import { Outlet } from 'react-router-dom';



export default function AppLayout() {
  return (
    <div className='app-layout'>
      <Header />
      <AppContent>
        <Outlet />
      </AppContent>
      <Footer />
    </div>
  );
}