import React from 'react';

import Loading from '../components/Loading';

export const ProfileComponent = () => {
  const { user } = {
    name: 'sam',
    email: 'sam',
  };

  return (
    <div className='container mb-5'>
      <div className='row align-items-center profile-header mb-5 text-center text-md-left'>
        <div className='col-md-10'>
          <h2>{user.name}</h2>
          <p className='lead text-muted'>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
