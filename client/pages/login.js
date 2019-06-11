import '@babel/polyfill';
import React from 'react';
import withRoot from '../styleguide/withRoot';
import AdminLogin from '../containers/AdminLogin';


class Login extends React.Component {

  static async getInitialProps({ req, res }) {
    try {
      let proxyPrefix = res.proxyPrefix;

      return { proxyPrefix };
    } catch (e) {
      res.redirect("/error");
    }
  }


  render() {
    return <AdminLogin proxyPrefix={this.props.proxyPrefix || ""}></AdminLogin>
  }
}

export default withRoot(Login);