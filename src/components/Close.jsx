/* eslint-disable no-unused-vars */
import React from 'react';
import { signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import appFirebase from '../fact';

const auth = getAuth(appFirebase);

const LogoutButton = () => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <button className='btn' onClick={handleLogout}>
      <span className="material-symbols-outlined">
arrow_back_ios
</span>
    </button>
  );
};

export default LogoutButton;
