import React from "react";

import Box from "@material-ui/core/Box";
import axios from "axios";

//get

const exampleContactArray = ["Jacob", "Danny", "Gordon"];

function contactArray(props) {
  exampleContactArray.forEach(function(element) {
    return (
      <ul>
        {exampleContactArray.map(function(name) {
          return <li>{name}</li>;
        })}
      </ul>
    );
  });
}

export default function ContactSheet(props) {
  contactArray(props);
  //for each contact
  //use object id to fetch name - set id as object id
  //jsx object for each contact with button

  return (
    <div>
      <h1>{props.contacts} </h1>
    </div>
  );
}

// return (
//   <Box margin={0} padding={0}>
//     <Box display="block" height={1 / 6}>
//       {props.username}
//       {props.contacts}
//       <ul>
//         {exampleContactArray.map(function(name) {
//           return <li>{name}</li>;
//         })}
//       </ul>
//       <h1>{props.contacts}</h1>
//     </Box>
//   </Box>
// );
