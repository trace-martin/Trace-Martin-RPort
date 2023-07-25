import React from 'react';
import '../styles/Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <a href='https://www.linkedin.com/in/trace-martin-7075b9237/' target='_blank'>
          <LinkedInIcon className='icon' />
        </a>
        <a href='https://github.com/trace-martin' target='_blank'>
          <GitHubIcon className='icon' />
        </a>
        <a href='mailto:trace.martin7817@gmail.com'>
          <EmailIcon className='icon' />
        </a>
      </div>
      <p> &copy; 2023 martinTech.com</p>
    </div>
  );
}

export default Footer;