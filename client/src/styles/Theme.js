import { createMuiTheme } from '@material-ui/core/styles';

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

export default theme;