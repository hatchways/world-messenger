import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Friends from './Friends';
import Requests from './Requests';
import Pending from './Pending';

const Contacts = props => {
  const [display, setDisplay] = React.useState('friends');
  const toggleDisplay = (event, setting) => {
    setDisplay(setting);
  }

  const friends = props.contacts.filter(curr => curr.status === 3);
  const requests = props.contacts.filter(curr => curr.status === 2);
  const pending = props.contacts.filter(curr => curr.status === 1);

  return (
    <Grid
      item
      container
      direction='column'
    >
      <Grid item style={{paddingLeft: '2rem'}}>
        <Tabs 
          value={display} 
          onChange={toggleDisplay} 
          variant='scrollable' 
          scrollButtons='auto' 
          TabIndicatorProps={{style: {display: 'none'}}}
        >
          <Tab value='friends' label='Friends' style={{minWidth: 0, fontSize: '1rem', paddingLeft: 0}}/>
          <Tab value='requests' label='Requests' style={{minWidth: 0, fontSize: '1rem'}}/>
          <Tab value='pending' label='Pending' style={{minWidth: 0, fontSize: '1rem'}}/>
        </Tabs>
      </Grid>

      {display === 'friends' && <Friends friends={friends} />}
      {display === 'requests' && <Requests requests={requests} />}
      {display === 'pending' && <Pending pending={pending} />}
    </Grid>
  );
}

export default Contacts;