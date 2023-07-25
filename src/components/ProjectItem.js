import React from 'react'
import { Modal, Backdrop, Fade, Typography, Button } from '@mui/material';
import '../styles/Modal.css'

function ProjectItem({ image, name, id, skills, description }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='projectItem' onClick={handleOpen}>
        <div style={{ backgroundImage: `url(${image})` }} className='projectImage' />
        <h1>{name}</h1>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <div className='modal'>
            <h2>{name}</h2>
            <div className='modalDescription'>
              <b>Description:</b>
            </div>
            <p className='modalDescription'>{description}</p>
            <p> 
              <b>Skills:</b>{ skills } 
            </p>
            <Button onClick={handleClose} variant='contained' color='primary'>
              Close
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ProjectItem