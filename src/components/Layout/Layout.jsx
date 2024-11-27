import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import '../../globals.css'; // Ensure this is included if you have global styles

const Layout = () => {
  const location = useLocation();

  // Define the paths where the Section should not be displayed


  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main>
        
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;