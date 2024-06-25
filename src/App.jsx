import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Tambah from './pages/Tambah';
import {BrowserRouter} from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tambah" element={<Tambah />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
