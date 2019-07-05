import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import ProfileModal from './ProfileModal';

const Profile = props => {
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <Grid
      item
      container
      spacing={3}
      alignItems='center'
      style={{
        padding: '2rem'
      }}
    >
      <Modal open={open} onClose={closeModal} style={{display: 'flex', justifyContent: 'center'}}>
        <ProfileModal />
      </Modal>
      <Grid item>
        <Avatar 
          alt='avatar'
          onClick={openModal} 
          style={{height: '3rem', width: '3rem', cursor: 'pointer'}}
        >
          <Icon className='fas fa-user' style={{textAlign: "center", fontSize: '2rem'}}/>
        </Avatar>
      </Grid>
      <Grid item>
        <Typography variant='h5'>{props.username}</Typography>
      </Grid>
    </Grid>
  )
};

export default Profile;