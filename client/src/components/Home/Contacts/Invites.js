import React from "react";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
          Primary
        </Button>
      </Box>
    </Box>
  );
};

export default Invites;
