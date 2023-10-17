import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import CollectionsIcon from '@mui/icons-material/Collections';
import HomeIcon from '@mui/icons-material/Home';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Navbar() {
  return (
    <div className='navbarContainer'>
      <ul className='navbar'>
        <li style={{ '--i': '#023466', '--j': 'white' }}>
          <Link to="/">
            <span className='icon'><HomeIcon /></span>
            <span className='title'>Home</span>
          </Link>
        </li>
        <li style={{ '--i': 'white', '--j': '#954495' }}>
          <Link to="/about">
            <span className='icon'><EmojiPeopleIcon /></span>
            <span className='title'>About</span>
          </Link>
        </li>
        <li style={{ '--i': '#993e3e', '--j': 'white' }}>
          <Link to="/projects">
            <span className='icon'><CollectionsIcon /></span>
            <span className='title'>Projects</span>
          </Link>
        </li>
        <li style={{ '--i': 'white', '--j': '#088c0a' }}>
          <Link to="/experience">
            <span className='icon'><AccountBoxIcon /></span>
            <span className='title'>Experience</span>
          </Link>
        </li>
        <li style={{ '--i': '#fffb00', '--j': 'white' }}>
          <Link to="/contact">
            <span className='icon'><ContactSupportIcon /></span>
            <span className='title'>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;