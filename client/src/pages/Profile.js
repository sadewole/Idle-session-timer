import React from 'react';
import { Navigate } from 'react-router';
// Relative paths
import { useAuth } from '../context';

export const ProfileComponent = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to='/auth/login' />;

  return (
    <div className='container mb-5'>
      <div className='row align-items-center profile-header mb-5 text-center text-md-left'>
        <div className='col-md-10'>
          <h2>Welcome,</h2>
          <p className='lead text-muted'>You sign in as {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
