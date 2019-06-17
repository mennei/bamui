import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import getPageContext from './getPageContext';
import JssProvider from 'react-jss/lib/JssProvider';
import { CssBaseline } from '@material-ui/core';

export default function withRoot(Component) {
  return class WithRoot extends React.Component {
    constructor(props) {
      super(props);
      this.pageContext = this.props.pageContext || getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector(`#jss-server-side`);
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    static getInitialProps = async ctx => {
      const { getInitialProps } = Component;
      return getInitialProps ? getInitialProps(ctx) : {};
    };

    render() {
      const { pageContext } = this;
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <JssProvider jss={pageContext.jss} generateClassName={pageContext.generateClassName}>
          <MuiThemeProvider theme={pageContext.theme} sheetsManager={pageContext.sheetsManager}>
            <CssBaseline />
            {/* <GlobalStyle /> */}
            <Component {...this.props} />
          </MuiThemeProvider>
        </JssProvider>
      );
    }
  };
}
