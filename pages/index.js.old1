import React, { Component } from "react";
import Head from 'next/head';
import Login from '../components/Login';

const getNewTokenApi = async reqToken => {
  const getTokensUrl = `http://bam-ui:3000/api/v1/`;
  const options = {
    headers: {
      "x-access-token": reqToken
    }
  };
  let newTokenCreation = await fetch(getTokensUrl, options)
    .then(async res => {
      if (res.status >= 400) {
        throw new Error("unable to get a token");
      }

      let newToken = await res.json();
      return newToken;
    })
    .catch(error => {
      throw new Error("unable to parse to json");
    });

  return {
    token:
      newTokenCreation &&
        newTokenCreation.data &&
        newTokenCreation.data.token
        ? newTokenCreation.data.token
        : ""
  };
};

const getLoginAuthenticationApi = async (protocol, token) => {
  try {
    let data;
    const getBamUiUrl = `http://bam-ui:3000/api/v1/values`;
    const options = {
      headers: {
        "x-access-token": token
      }
    };

    // check if the user is authenticated first
    data = typeof token === "string" || token ?
      await fetch(getBamUiUrl, options)
        .then(async res => {
          if (res.status === 200) {
            // let getAgentDataRes = await res.json();
            let data = await res.json();
            return data;
          }
        })
        .catch(e => null) // if fetch agent data failed return res with token anyway
      : {};

    // return {
    //     agentDetails:
    //         agentData && agentData.data && agentData.data.agentDetails
    //             ? agentData.data.agentDetails
    //             : {}
    // };
    return data;
  } catch (err) {
    throw err;
  }
};

class Index extends Component {
  static async getInitialProps({ req, res }) {
    try {
      let protocol = req.headers["x-forwarded-proto"];
      // let requestId = res.requestId;
      // let opswatURL = res.opswatURL;
      // let proxyPrefix = res.proxyPrefix;

      // client token
      const token = await getNewTokenApi(req.query.token);
      const _token = token.token;
      // get agent details
      const response = req.query.token
        ? await getLoginAuthenticationApi(protocol, req.query.token)
        : {};

      return {
        token: _token
      };
    } catch (e) {
      res.redirect("/error");
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid-container" align="center">
        <Head>
          <title>Bam UI</title>
          <link href="./static/favicon.ico" rel="icon" type="image/x-icon" />
          <link href="./static/style.css" rel="stylesheet" />
        </Head>
        <div className="item1">
          <img src="./static/Menora_logo.png" />
          <h1>Bam UI</h1>
          <Login />
        </div>
      </div>
    );
  }
}
export default Index;