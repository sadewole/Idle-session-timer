import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  return (
    <div className='mx-auto w-50'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default Auth;
