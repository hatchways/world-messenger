import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/styles";

import Profile from './Profile/Profile';
import Contacts from './Contacts/Contacts';

import styles from '../../../styles/Home/Sidebar/SidebarStyles';

const Sidebar = props => {
  return (
    <Grid
      item
      container
      sm={3}
      direction='column'
      className={props.classes.root}
    >
      <Profile 
        username={props.username}
        profile={props.profile}
        editProfile={props.editProfile}
        logout={props.logout}
      />
      <Contacts 
        contacts={props.contacts}
        requestContact={props.requestContact}
      />
    </Grid>
  );
}

export default withStyles(styles)(Sidebar);