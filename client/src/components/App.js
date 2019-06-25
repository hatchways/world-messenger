import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './Landing';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h4: {
      lineHeight: 1.5
    },
    button: {
      textTransform: 'none',
      fontWeight: 'bold'
    }
  }
});

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