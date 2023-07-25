import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderTwoToneIcon from '@mui/icons-material/ReorderTwoTone';

function Navbar() {
    const [expandNavbar, setExpandNavBar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavBar(false)
    }, [location]);

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
        <div className='toggleButton'>
            <button onClick={() => {setExpandNavBar((prev) => !prev)}}> 
                <ReorderTwoToneIcon />
            </button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    </div>
  );
}

export default Navbar