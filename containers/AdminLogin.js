import React, { Component } from "react";
import styled from "styled-components";
import CardStyle from "../component/CardStyle";
import TextField from "../component/TextField";
import Btn from "../component/Btn";
import { PopUpStyle } from "../premitives/PopUpStyle";
import { ToastContainer, toast, Zoom } from "react-toastify";

class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userPassword: "",
      btnWorking: false,
      redirect: false
    };
  }

  onAdminLoginChange = event => {
    //currentTarget for button, regular target for all the others.
    let targetType =
      event && event.currentTarget ? event.currentTarget : event.target;
    this.setState({
      [targetType.id]: targetType.value
    });
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.enterFunction, false);
  }

  componentDidMount() {
    // handle escape
    document.addEventListener("keydown", this.enterFunction, false);
  }

  enterFunction = event => {
    if (event.key === "Enter") {
      if (this.state.userName && this.state.userPassword) {
        this.handleLogin();
      }
    }
  };

  handleLogin = () => {
    if (!this.state.userName || !this.state.userPassword) {
      toast.error("חובה למלא שם משתמש וסיסמה!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
        transition: Zoom
      });
      return;
    }

    //login success
    this.setState({ btnWorking: true }, () => {
      this.fetchLogin(this.state.userName, this.state.userPassword);
    });
  };

  fetchLogin = async (username, password) => {
    let authorization = window.btoa(`${username}:${password}`);

    try {
      const url = `${window.location.protocol}//${window.location.hostname}:${
        window.location.port
      }${this.props.proxyPrefix}/api/v1/loginAuthentication`;
      const options = {
        timeout: 3000,
        headers: {
          Authorization: authorization,
          "Content-Type": "application/json"
        },
        method: "POST"
      };

      let response = await fetch(url, options);

      if (response && response.status && response.status === 200) {
        response = await response.json();

        this.setState({ redirect: true }, () => {
          location.href = `${window.location.protocol}//${
            window.location.hostname
          }:${window.location.port}/admin?token=${response.data.token}`;
        });
      } else {
        this.setState({ btnWorking: false }, () => {
          toast.error("שם משתמש או סיסמה אינם נכונים!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: false,
            transition: Zoom
          });
        });
      }
    } catch (err) {
      console.log("[fetchUpdateAddProcess] - ", err);
    }
  };

  render() {

    return (
      <AdminLoginStyle>
        <PopUpStyle>
          <ToastContainer rtl />
        </PopUpStyle>
        <CardStyle className="card">
          <span className="managementAreaP">אזור ניהול</span>
          <TextField
            tabIndex={1}
            name="userName"
            id="userName"
            fieldName="שם משתמש"
            value={this.state.userName}
            onChange={this.onAdminLoginChange}
            type="text"
            maxLength={20}
          />
          <TextField
            tabIndex={2}
            name="userPassword"
            id="userPassword"
            fieldName="סיסמה"
            value={this.state.userPassword}
            onChange={this.onAdminLoginChange}
            type="password"
            maxLength={20}
          />
          <Btn
            height="50px"
            spinnerShow={false}
            text="התחברות"
            handleClick={this.handleLogin}
            spinnerShow={this.state.btnWorking}
          />
        </CardStyle>
      </AdminLoginStyle>
    );
  }
}
const AdminLoginStyle = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  box-sizing: border-box;

  .card {
    width: 500px;
    height: 500px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px 50px 25px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      flex-grow: 1;
    }

    .managementAreaP {
      font-size: 28px;
      flex-grow: 0.3;
      font-family: "almoni-neue-aaa-400";
    }

    .errorText {
      font-family: "almoni-neue-aaa-400";
      font-size: 18px;
    }
  }
`;
export default AdminLogin;
