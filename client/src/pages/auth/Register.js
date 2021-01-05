import React from 'react';
import { Link } from 'react-router-dom';

// Relative paths
import client from '../../client';
import { useAuth } from '../../context';

const Register = () => {
  const { setAuthState } = useAuth();
  const onSubmit = (event) => {
    event.preventDefault();

    const [email, password] = event.target.elements;
    client
      .post('auth/register', {
        email: email.value,
        password: password.value,
      })
      .then(({ data: { token, user } }) => {
        client.defaults.headers.token = token;
        localStorage.setItem('token', token);
        setAuthState((prevState) => ({
          ...prevState,
          user,
          isAuthenticated: true,
        }));
      })
      .catch(console.log);
  };

  return (
    <form onSubmit={onSubmit} className='form-signin'>
      <h1 className='h3 mb-3 font-weight-normal text-center'>
        Please register a new account
      </h1>
      <label htmlFor='inputEmail' className='sr-only'>
        Email address
      </label>
      <input
        type='email'
        id='inputEmail'
        className='form-control mb-2'
        placeholder='Email address'
        required
      />
      <label htmlFor='inputPassword' className='sr-only'>
        Password
      </label>
      <input
        type='password'
        id='inputPassword'
        className='form-control mb-3'
        placeholder='Password'
        required
      />
      <button className='btn btn-lg btn-primary btn-block' type='submit'>
        Create Account
      </button>
      <p className='mt-3 mb-3 text-muted text-center'>
        Already registered ? <Link to='/auth/login'>Login here</Link>
      </p>
    </form>
  );
};

export default Register;
