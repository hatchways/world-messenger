import React from "react";

import Box from "@material-ui/core/Box";

function contactArray(props) {
  //for each contact
  //use object id to fetch name - set id as object id
  //jsx object for each contact with button
}

export default function ContactSheet(props) {
  contactArray(props);

  return (
    <Box margin={0} padding={0}>
      <Box display="block" height={1 / 6}>
        {props.contacts}
      </Box>
    </Box>
  );
}
