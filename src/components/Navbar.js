import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
// import ReorderTwoToneIcon from '@mui/icons-material/ReorderTwoTone';
import CollectionsIcon from '@mui/icons-material/Collections';
import HomeIcon from '@mui/icons-material/Home';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Navbar() {
    const [expandNavbar, setExpandNavBar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavBar(false)
    }, [location]);

  return (
      <div className='navbarContainer'>
            <ul className='navbar'>
                <li style={{'--i': '#023466', '--j': 'white'}}>
                    <a href='/'>
                        <span className='icon'><HomeIcon /></span>
                        <span className='title'>Home</span>
                    </a>
                </li>
                {/* this is the background color #954495 */}
                <li style={{'--i': 'white', '--j': '#954495'}}>
                    <a href='/about'>
                        <span className='icon'><EmojiPeopleIcon /></span>
                        <span className='title'>About</span>
                    </a>
                </li>
                <li style={{'--i': '#993e3e', '--j': 'white'}}>
                    <a href='/projects'>
                        <span className='icon'><CollectionsIcon /></span>
                        <span className='title'>Projects</span>
                    </a>
                </li>
                <li style={{'--i': 'white', '--j': '#088c0a'}}>
                    <a href='/experience'>
                        <span className='icon'><AccountBoxIcon /></span>
                        <span className='title'>Experience</span>
                    </a>
                </li>
                <li style={{'--i': '#fffb00', '--j': 'white'}}>
                    <a href='/contact'>
                        <span className='icon'><ContactSupportIcon /></span>
                        <span className='title'>Contact</span>
                    </a>
                </li>
            </ul>
        </div>
    // </div>
  );
}

export default Navbar


