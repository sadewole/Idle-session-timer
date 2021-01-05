import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Relative paths
import Loading from './components/Loading';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auth from './pages/auth';
import SessionTimeout from './components/SessionTimeout';
import { useAuth } from './context';

// styles
import './App.css';

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
      <SessionTimeout />
    </BrowserRouter>
  );
};

export default App;
