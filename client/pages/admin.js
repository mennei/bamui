import "@babel/polyfill";
import React from "react";
import withRoot from "../styleguide/withRoot";
import AdminCustomerTypes from "../containers/AdminCustomerTypes";

const getDigitalProcesses = async () => {
  try {
    let digitalProcesses;
    const getAgentDetailsUrl = `http://agents-joining-requests:3000/api/v1/digitalProcesses/`;

    // check if the user is authenticated first
    digitalProcesses = await fetch(getAgentDetailsUrl).then(async res => {
      if (res.status === 200) {
        let digitalProcessesRes = await res.json();
        return digitalProcessesRes;
      }
    });

    return digitalProcesses.data.digitalProcessList;
  } catch (err) {
    throw err;
  }
};

class Admin extends React.Component {
  static async getInitialProps({ req, res }) {
    try {
      // get digital processes details
      const digitalProcesses = await getDigitalProcesses();
      const token = req.query.token;
      let proxyPrefix= res.proxyPrefix;

      if (!token) {
        throw new Error("No Token");
      }

      return { digitalProcesses, token, proxyPrefix };
    } catch (e) {

      res.redirect("/error");
    }
  }

  render() {

    return (
      <AdminCustomerTypes
        digitalProcesses={this.props.digitalProcesses}
        token={this.props.token}
        proxyPrefix={this.props.proxyPrefix || ""}
      />
    );
  }
}

export default withRoot(Admin);
