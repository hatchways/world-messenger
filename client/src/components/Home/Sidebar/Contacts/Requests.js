import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/styles";

import styles from '../../../../styles/Home/Sidebar/ContactsStyles';

const Requests = props => {
  const entries = props.requests.map(curr => (
    <Grid
      item
      container
      direction='column'
      spacing={1}
      className={props.classes.entry}
      key={curr.username}
    >
      <Grid item>
        <Typography variant='body1' align='center'>
          <b>{curr.username}</b> would like to add you as a friend
        </Typography>
      </Grid>

      <Grid item container justify='center' spacing={2}>
        <Grid item>
          <Button variant='contained' color='primary'>
            Accept
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' color='secondary'>
            Decline
          </Button>
        </Grid>
      </Grid>
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

export default withStyles(styles)(Requests);