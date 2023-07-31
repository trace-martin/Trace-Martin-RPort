import React from 'react'
import { Modal, Fade, Button } from '@mui/material';
import '../styles/Modal.css'
import { hasDeployedLink } from '../helpers/ProjectList';

function ProjectItem({ image, name, skills, description, gitLink, deployedLink }) {
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
            <div className='modalDescription'>
            <h2>{name}</h2>
              <b>Description:</b>
            </div>
            <p className='modalDescription'>{description}</p>
            <p> 
              <b>Skills:</b>{ skills } 
            </p>
            <p>
                <b>GitHub:</b>

                <a href={ gitLink } target='_blank' rel="noreferrer">
                  Check it out!
                </a>
            </p>
            {hasDeployedLink({ deployedLink }) && (
              <p>
                <b>Deployed Link:</b>
                <br />
                <a href={deployedLink} target='_blank' rel='noreferrer'>
                  Deployed Application
                </a>
              </p>
            )}
            <Button onClick={handleClose} variant='contained'>
              Close
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ProjectItem