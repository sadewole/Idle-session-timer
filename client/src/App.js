import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loading from './components/Loading';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auth from './pages/auth';
// import ProtectedRoute from './components/ProtectedRoute';

// styles
import './App.css';

import { useAuth } from './context';

const App = () => {
  const { loading } = useAuth();
  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <div id='app' className='d-flex flex-column h-100'>
        <NavBar />
        <div className='container flex-grow-1 mt-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='auth/*' element={<Auth />} />
            <Route path='profile' element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
