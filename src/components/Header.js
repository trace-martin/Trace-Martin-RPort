import React from 'react';
import Hero from '../assets/hero.jpg';
import '../styles/Header.css'

function Header() {
  return (
    <div className='header'>
      <img src={Hero} alt='Header' />
    </div>
  );
}

export default Header;