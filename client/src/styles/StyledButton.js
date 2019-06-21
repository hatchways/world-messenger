import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    backgroundColor: props =>
      props.color === 'blue'
        ? '#3A8DFF'
        : 'white',
    border: 0,
    borderRadius: 3,
    color: props =>
      props.color === 'blue'
        ? 'white'
        : '#3A8DFF',
    padding: '1rem 4rem',
    boxShadow: props =>
      props.color === 'blue'
        ? 'none'
        : '0 3px 10px #e6e6e6'
  },
};

function StyledButton(props) {
  const { classes, color, ...other } = props;
  return <Button className={classes.root} {...other}></Button>;
}

export default withStyles(styles)(StyledButton);