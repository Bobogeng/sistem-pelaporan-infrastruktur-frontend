import {ThemeProvider} from 'styled-components';
import GlobalStyle from '../Global';
import Navbar from '../Navbar';
import theme from '../../utils/theme';
import Footer from '../Footer';
import {Outlet /*Link*/} from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <div className="dashboard__layout">
        <Outlet />
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default DashboardLayout;
