import React from 'react';
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  return (
    <Link
      to='/captain-login'
      className='fixed top-4 right-4 z-50 bg-white hover:bg-gray-100 transition-colors
                 text-gray-900 px-2.5 py-1 rounded-full shadow-md
                 flex items-center gap-2'
    >
      <i className='ri-logout-box-r-line text-lg'></i>
    </Link>
  );
};

export default LogoutButton;
