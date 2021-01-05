import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context';

const Navbar = () => {
  const {
    authState: { isAuthenticated },
    logout,
  } = useAuth();
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <NavLink to='/' className='navbar-brand'>
        Session Timer
      </NavLink>

      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
          <NavLink className='nav-link' to='/'>
            Home
            <span className='sr-only'>(current)</span>
          </NavLink>
        </li>
      </ul>
      <ul className='nav ml-auto'>
        {!isAuthenticated && (
          <li className='nav-item mr-2'>
            <NavLink to='/auth/login'>
              <button type='button' className='btn btn-secondary'>
                Login
              </button>
            </NavLink>
          </li>
        )}
        {isAuthenticated && (
          <Fragment>
            <li className='nav-item mr-2'>
              <NavLink
                to='/profile'
                className='nav-link'
                activeClassName='router-link-exact-active'
              >
                Profile
              </NavLink>
            </li>
            <li className='nav-item' onClick={() => logout()}>
              <button type='button' className='btn btn-secondary'>
                Log out
              </button>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
