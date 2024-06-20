import {ThemeProvider} from 'styled-components';
import Footer from './components/Footer';
import GlobalStyle from './components/Global';
import Navbar from './components/Navbar';
import theme from './utils/theme';
import About from './components/About';
import Berita from './components/Berita';
import Input from './components/Input';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Tambah from './pages/Tambah';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tambah" element={<Tambah />} />
        </Routes>
        <About />
        <Berita />
        <Input />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
