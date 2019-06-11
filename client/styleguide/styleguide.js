import { createMuiTheme } from '@material-ui/core/styles';


// style component theme
//theme
export const theme = createMuiTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Almoni',
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#684eed'
    },
    secondary: {
      main: '#684eed'
    }
  },
  useAccessability: true,

  toggleAccessability: () => {
    this.useAccessability = !this.useAccessability;
  }
});
