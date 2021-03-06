import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { withStyles } from "@material-ui/styles";

import FriendModal from './FriendModal';
import styles from '../../../../styles/Home/Sidebar/ContactsStyles';
import DefaultIcon from '../../../../styles/DefaultIcon';
import convertBase64 from '../../../../utils/convertBase64';

const Friends = props => {
  const entries = (selected, select) => props.friends.map(curr => (
    <Grid
      item
      container
      spacing={3}
      alignItems='center'
      className={
        selected === curr.username 
        ? props.classes.friend + ' ' + props.classes.selected 
        : props.classes.friend
      }
      key={curr.username}
      onClick={() => {select(curr.index)}}
    >
      <Grid item>
        {curr.image ? (
          <Avatar 
            alt='avatar' 
            src={convertBase64(curr.image.data.data, curr.image.contentType)} 
            className={props.classes.avatar} 
          />
        ) : (
          <Avatar 
            alt='avatar' 
            className={props.classes.avatar}
          >
            <DefaultIcon />
          </Avatar>
        )}
      </Grid>
      <Grid item>
        <Typography variant='h5'>{curr.username}</Typography>
      </Grid>
    </Grid>
  ));

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
      direction='column'
    >
      <Modal 
        open={open} 
        onClose={closeModal} 
        className={props.classes.friendModal}
      >
        <FriendModal 
          requestContact={props.requestContact} 
          closeModal={closeModal}
        />
      </Modal>
      <Grid item className={props.classes.addFriend}>
        <Button color='primary' onClick={openModal} disableRipple>
          <Icon className='fas fa-plus' classes={{root: props.classes.addFriendIcon}}/>
          <Typography variant='body1'>Add friend</Typography>
        </Button>
      </Grid>
      {entries(props.selected, props.selectContact)}
    </Grid>
  );
}

export default withStyles(styles)(Friends);