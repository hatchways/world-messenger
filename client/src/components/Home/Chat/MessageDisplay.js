import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/styles";

import styles from '../../../styles/Home/Chat/MessageDisplayStyles';

const MessageDisplay = props => (
  <Grid
    item
    container
    direction='column'
    className={props.classes.root}
  >

  </Grid>
);

export default withStyles(styles)(MessageDisplay);