import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../styles/Theme';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path={['/', '/login', '/register']} component={Landing}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
};

export default App;