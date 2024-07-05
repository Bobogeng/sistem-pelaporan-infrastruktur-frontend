// src/App.jsx
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Tambah from './pages/Tambah';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import Detail from './components/Detail';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import {AuthProvider} from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tambah" element={<ProtectedRoute element={<Tambah />} />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="/berita/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
