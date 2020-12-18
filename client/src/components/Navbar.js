import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticated = false;
  const user = null;

  const logoutWithRedirect = () => {};

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
      <ul className='navbar-nav ml-auto'>
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
            <li className='nav-item'>
              <span className='user-info'>
                <img
                  src={user.picture}
                  alt='Profile'
                  className='nav-user-profile d-inline-block rounded-circle mr-3'
                  width='50'
                />
                <h6 className='d-inline-block'>{user.name}</h6>
              </span>
            </li>
            <li className='nav-item'>
              <NavLink to='/profile' activeClassName='router-link-exact-active'>
                Profile
              </NavLink>
            </li>
            <li className='nav-item' onClick={() => logoutWithRedirect()}>
              Log out
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
