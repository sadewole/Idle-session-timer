import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const [name, email, password] = event.target.elements;
    console.log(name, email, password);
  };

  return (
    <form onSubmit={onSubmit} className='form-signin'>
      <h1 className='h3 mb-3 font-weight-normal text-center'>
        Please register a new account
      </h1>
      <label htmlFor='inputEmail' className='sr-only'>
        Name
      </label>
      <input
        type='name'
        id='name'
        className='form-control mb-2'
        placeholder='Name'
        required
        autoFocus
      />
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
