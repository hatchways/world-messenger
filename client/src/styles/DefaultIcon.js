import React from 'react';
import Icon from '@material-ui/core/Icon';
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    textAlign: 'center',
    fontSize: '2rem'
  }
}

const DefaultIcon = props => (
  <Icon className='fas fa-user' classes={{root: props.classes.root}}/>
);

export default withStyles(styles)(DefaultIcon);