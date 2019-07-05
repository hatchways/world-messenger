import React from 'react';
import Grid from '@material-ui/core/Grid';

import Profile from './Profile/Profile';
import Contacts from './Contacts/Contacts';

const Sidebar = props => {
  return (
    <Grid
      item
      container
      sm={3}
      direction='column'
      style={{backgroundColor: '#F4F6FA'}}
    >
      <Profile 
        username={props.username}
      />
      <Contacts 
        contacts={props.contacts}
      />
    </Grid>
  );
}

export default Sidebar;