import React from 'react';
import HeaderImage from '../path/to/header-image.jpg'; // Replace with the path to your header image

function Header() {
  return (
    <div className='header'>
      <img src={HeaderImage} alt='Header' />
    </div>
  );
}

export default Header;