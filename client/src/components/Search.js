import React from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function searchContacts() {
  //access contacts
  //filter
  //display in invites
}

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

const Invites = () => {
  const classes = useStyles();

  return (
    <Box margin={0} padding={0}>
      <Box display="block" height={1 / 6}>
        <Button color="primary" className={classes.button}>
          Invite
        </Button>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="searchText"
            label="Search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={searchContacts()}
          />
        </form>
      </Box>
    </Box>
  );
};

export default Invites;
