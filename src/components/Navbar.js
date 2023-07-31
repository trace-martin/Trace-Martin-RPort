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
      <div className='navbarContainer'>
        <div className='navbar' id={expandNavbar ? 'open' : 'collapsed'}>
        {location.pathname !== '/' && (
          <div className='logoOverlay'> TraceMartin </div>
        )}
            <div className='toggleButton'>
                <button onClick={() => {setExpandNavBar((prev) => !prev)}}> 
                    <ReorderTwoToneIcon />
                </button>
            </div>
            <div className='links'>
                <Link className='pop' to="/"> Home </Link>
                <Link className='pop' to="/about"> About </Link>
                <Link className='pop' to="/projects"> Projects </Link>
                <Link className='pop' to="/experience"> Experience </Link>
                <Link className='pop' to="/contact"> Contact </Link>
            </div>
        </div>
    </div>
  );
}

export default Navbar