import React, { Component } from "react";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ContactSheet from "./ContactSheet";

function sendInvite() {
  // console.log(document.getElementById("searchText").addEventListener;
}

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1)
//   },
//   dense: {
//     marginTop: theme.spacing(2)
//   },
//   menu: {
//     width: 200
//   }
// }));

const contactsArray = ["A", "B", "C"];

class Invites extends Component {
  searchText = e => {
    // console.log(contactsArray.filter(e.target.value);
  };

  render() {
    return (
      <div>
        <Box margin={0} padding={0}>
          <Box display="block" height={1 / 6}>
            <Button color="primary" onClick={sendInvite()}>
              Invite
            </Button>
            <form noValidate autoComplete="off">
              <TextField
                id="searchText"
                name="Search"
                label="Search"
                margin="normal"
                variant="outlined"
                onChange={this.searchText}
              />
            </form>
          </Box>
        </Box>
      </div>
    );
  }
}

export default Invites;

// import Box from "@material-ui/core/Box";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

// function sendInvite() {
//   // console.log(document.getElementById("searchText").addEventListener;
// }

// function searchContacts() {
//   //access contacts
//   //filter
//   //display in invites
// }

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1)
//   },
//   dense: {
//     marginTop: theme.spacing(2)
//   },
//   menu: {
//     width: 200
//   }
// }));

// const Invites = props => {

//   return (
//     <div>
//       <Box margin={0} padding={0}>
//         <Box display="block" height={1 / 6}>
//           <Button
//             color="primary"
//             className={classes.button}
//             onClick={sendInvite()}
//           >
//             Invite
//           </Button>
//           <form className={classes.container} noValidate autoComplete="off">
//             <TextField
//               id="searchText"
//               label="Search"
//               className={classes.textField}
//               margin="normal"
//               variant="outlined"
//               onChange={searchContacts()}
//             />
//           </form>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Invites;
