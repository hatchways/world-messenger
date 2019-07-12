import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/styles";

import Message from './Message';
import styles from '../../../styles/Home/Chat/MessageDisplayStyles';

const MessageDisplay = props => {
  const messages = props.messages.map(curr => (
    <Message 
      message={curr} 
      username={props.username}
      key={curr.id}
    />
  ))

  return (
    <Grid
      item
      container
      direction='column'
      className={props.classes.root}
    >
      {messages}
    </Grid>
)};

export default withStyles(styles)(MessageDisplay);