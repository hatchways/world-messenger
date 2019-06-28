import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  avatar: {
    width: 70,
    height: 70,
    margin: 10
  },
  userprofelems: {
    margin: 10,
    align: "center"
  }
});

export default function UserProfile(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item className={classes.userprofelems}>
        <Button color="primary" className={classes.button}>
          <Avatar alt="Avatar" src={props.userimg} className={classes.avatar} />{" "}
        </Button>
      </Grid>

      <Grid item className={classes.userprofelems}>
        <Typography variant="h6" gutterBottom>
          {props.username}
        </Typography>
      </Grid>
    </Grid>
  );
}
