import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/styles";

import styles from '../../../../styles/Home/Sidebar/ContactsStyles';

const Pending = props => {
  const entries = props.pending.map(curr => (
    <Grid 
      item 
      key={curr.username}
      className={props.classes.entry}
    >
      <Typography variant='body1'>
        <b>{curr.username}</b> has received your friend request
      </Typography>
    </Grid>
  ));

  return (
    <Grid 
      item 
      container
      direction='column'
    >
      {entries}
    </Grid>
  );
}

export default withStyles(styles)(Pending);