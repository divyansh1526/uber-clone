import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link
      to="/home"
      className="fixed top-4 right-4 z-50 bg-white hover:bg-gray-100 transition-colors
                 text-gray-900 px-4 py-2 rounded-full shadow-md
                 flex items-center gap-2"
    >
      <i className="ri-home-4-line text-lg"></i>
      <span className="text-sm font-medium">Home</span>
    </Link>
  );
};

export default HomeButton;
