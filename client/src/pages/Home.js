import React from 'react';
import logo from '../assets/logo.svg';

const Home = () => (
  <div className='text-center hero my-5'>
    <img className='mb-3 app-logo' src={logo} alt='React logo' width='120' />
    <h1 className='mb-4'>React.js Idle-Timer</h1>

    <p className='lead'>
      This is a sample application that demonstrates idle user session-timer on
      SPA, using <a href='https://reactjs.org'>React.js</a>
    </p>
  </div>
);

export default Home;
