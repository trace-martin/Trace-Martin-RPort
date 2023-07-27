import React from 'react';
import '../styles/Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
      <a href='https://www.linkedin.com/in/trace-martin-7075b9237/' target='_blank' rel="noreferrer">
          <LinkedInIcon className='icons' />
        </a>
        <a href='https://github.com/trace-martin' target='_blank' rel="noreferrer">
          <GitHubIcon className='icons' />
        </a>
        <a href='mailto:trace.martin7817@gmail.com' rel="noreferrer">
          <EmailIcon className='icons' />
        </a>
      </div>
      <p> &copy; <a href="2023 https://github.com/trace-martin" target='_blank' rel="noreferrer" className='copyRight' >trace-martin</a></p>
    </div>
  );
}

export default Footer;