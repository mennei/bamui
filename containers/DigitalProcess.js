import React, { Component } from "react";
import Card from "./Card";
import StepCard from "../component/StepCard";
import Spinner from "../component/Spinner";
import CompletionModal from "../modal/CompletionModal";
import InfoModal from "../modal/InfoModal";
import DisclaimerModal from "../modal/DisclaimerModal";
import { fieldsValidate } from "./../common/FieldsValidate";
import { MainTitleStyles } from "../premitives/TitleStyles";
import { DigitalProcessStyle } from "../premitives/DigitalProcessStyle";
import fetch from "isomorphic-fetch";

// mobile header only
import MobileHeader from "../component/MobileHeader/MobileHeader";

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

class DigitalProcess extends Component {
  constructor(props) {
    super(props);
    const {
      agentName,
      agentEmail,
      agentPhoneNumber,
      agentCell,
      images
    } = props.agentDetails;

    this.state = {
      //DigitalProcess field
      requestId: this.props.requestId, //not to change
      //AgentDetails field
      images: [],
      agentNumber: "",
      companyCode: "",
      agentName: "",
      agentEmail: agentEmail || "",
      agentCell: agentCell || "",
      agentImages: null,
      agentPhoneNumber:
        (agentPhoneNumber &&
          agentPhoneNumber.slice(
            agentPhoneNumber.length - 7,
            agentPhoneNumber.length
          )) ||
        "",
      agentPhoneNumberPrefix:
        (agentPhoneNumber &&
          agentPhoneNumber.slice(0, agentPhoneNumber.length - 7)) ||
        "050",

      //CustomerSendType field
      processName: "",
      selectedProcess: null,
      searchStr: "",
      isSearchSelected: false,

      //CustomerDetails field
      customerFirstName: "",
      customerLastName: "",
      customerId: "",
      customerPolicyNumber: "",
      customerNumber: "",
      customerPhoneNumber: "",
      customerPhoneNumberPrefix: "050",
      customerEmailAddress: "",

      isCustomerPhone: false,
      isCustomerEmail: false,
      isInfoModal: false,
      isCompletionModal: false,
      isDisclaimerModal: false,
      spinnerShow: false,

      //modal status field
      strictMode: false,
      sendModalStatus: "",
      isSubmitValid: true, // default : true
      btnHold: false,
      // current step
      currentStep: 0,
      contrastMode: false,
      isAgentPilot: false
    };

    // ref for card headers, using for calc current step on scroll
    this.agentHead = React.createRef();
    this.sendDataHead = React.createRef();
    this.customerHead = React.createRef();
  }

  escFunction = event => {
    if (event.keyCode === 27) {
      this.setState({ isDisclaimerModal: false });
    }
  };

  componentDidMount() {
    if (
      !Object.keys(this.props.agentDetails).length &&
      sessionStorage.getItem("agentName") &&
      sessionStorage.getItem("agentNumber") &&
      sessionStorage.getItem("agentEmail") &&
      sessionStorage.getItem("agentPhoneNumber") &&
      sessionStorage.getItem("agentPhoneNumberPrefix")
    ) {
      this.setState({
        agentName: sessionStorage.getItem("agentName"),
        agentNumber: sessionStorage.getItem("agentNumber"),
        agentEmail: sessionStorage.getItem("agentEmail"),
        agentPhoneNumber: sessionStorage.getItem("agentPhoneNumber"),
        agentPhoneNumberPrefix: sessionStorage.getItem("agentPhoneNumberPrefix")
      });
    }

    var sBrowser,
      sUsrAg = navigator.userAgent;
    let ms_ie = false;
    let ua = window.navigator.userAgent;
    let old_ie = ua.indexOf("MSIE ");
    let new_ie = ua.indexOf("Trident/");
    if (old_ie > -1 || new_ie > -1) ms_ie = true;
    if (ms_ie) document.body.setAttribute("class", "ieClass");
    if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
      // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
      sBrowser = "Opera";
      //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf("Trident") > -1) {
      sBrowser = "Microsoft Internet Explorer";
      // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
      sBrowser = "Microsoft Edge";
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Google Chrome or Chromium";
      // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
      document.body.setAttribute("class", "safariClass");
    } else {
      sBrowser = "unknown";
    }

    // listen to scroll
    window.addEventListener("scroll", this.onWindowScroll);

    // init step on mount
    this.onWindowScroll();

    // handle escape
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onWindowScroll);
    document.removeEventListener("keydown", this.escFunction, false);
  }

  onWindowScroll = () => {
    const offset = 130;
    let activeStep;
    if (this.customerHead.current.getBoundingClientRect().top <= offset) {
      activeStep = 2;
    } else if (
      this.sendDataHead.current.getBoundingClientRect().top <= offset
    ) {
      activeStep = 1;
    } else {
      activeStep = 0;
    }
    this.setState({
      currentStep: activeStep
    });
  };

  onDigitalProcessChange = event => {
    //currentTarget for infoModal, regular target for all the others.
    let switchTypeTarget = event.currentTarget
      ? event.currentTarget
      : event.target;
    switch (switchTypeTarget.name) {
      case "agentNumberField":
        this.setState({
          agentNumber: switchTypeTarget.value
        });
        break;
      case "agentNumber":
        this.setState(
          {
            agentName: event.target.value.name.toString(),
            agentNumber: event.target.value.number.toString(),
            companyCode: event.target.value.companyCode.toString(),
            processName: "",
            selectedProcess: {},
            searchStr: "",
            isSearchSelected: false
          },
          () => {

            if (this.state.agentNumber) {
              this.fetchGetAgentImages();
            }
          }
        );
        break;
      case "processName":
        this.setState({
          processName: event.value.processDisplayName,
          selectedProcess: event.value,
          searchStr: event.value.processDisplayName,
          isSearchSelected: true
        });
        break;
      case "clean":
        this.setState({
          processName: "",
          selectedProcess: {},
          searchStr: "",
          isSearchSelected: false
        });
        break;

      case "customerPhoneNumber":
        this.setState({
          customerPhoneNumber: event.target.value,
          isCustomerPhone: event.target.value ? true : false
        });
        break;
      case "customerEmailAddress":
        this.setState({
          customerEmailAddress: event.target.value,
          isCustomerEmail: event.target.value ? true : false
        });
        break;
      case "isCustomerPhone":
        this.setState({
          isCustomerPhone: !this.state.isCustomerPhone,
          customerPhoneNumber:
            this.state.isCustomerPhone === true
              ? ""
              : this.state.customerPhoneNumber
        });
        break;
      case "isCustomerEmail":
        this.setState({
          isCustomerEmail: !this.state.isCustomerEmail,
          customerEmailAddress:
            this.state.isCustomerEmail === true
              ? ""
              : this.state.customerEmailAddress
        });
        break;
      case "isInfoModal":
        this.setState({
          isInfoModal: !this.state.isInfoModal
        });
        break;
      case "IsCompletionModal":
        this.setState({
          isCompletionModal: !this.state.isCompletionModal
        });
        break;
      case "isDisclaimerModal":
        this.setState(
          {
            isDisclaimerModal: !this.state.isDisclaimerModal
          },
          () => {
            this.fetchInsuRequest();
          }
        );
        break;
      case "images":
        event.target.images[0].sanitizedBase64 = "";
        event.target.images[1].sanitizedBase64 = "";

        this.setState({
          images: event.target.images
        });
        break;
      case "sendModalStatus":
        this.setState({
          sendModalStatus: "",
          btnHold: false
        });
        break;
      case "searchTypes":
        this.setState({
          searchStr: event.target.value
        });
        break;
      default:
        this.setState({
          [switchTypeTarget.name]: event.target.value
        });
        break;
    }
  };

  SendUrlToCustomer = async () => {
    let isValidBtn = "success"; // Default state
    let sumbitCounter = getCookie("Counter");
    let sumbitTime = getCookie("Time");

    let validateArr = [
      "agentName",
      "agentNumber",
      "agentEmail",
      "agentPhoneNumber",
      "customerFirstName",
      "customerLastName",
    ];

    for (let index = 0; index < validateArr.length; index++) {
      if (
        !fieldsValidate(validateArr[index], this.state[validateArr[index]]) ||
        !this.state[validateArr[index]]
      ) {
        isValidBtn = "failure";
      }
    }

    if (!this.state.processName) {
      isValidBtn = "failure";
    }

    if (this.state.isCustomerPhone) {
      if (
        !fieldsValidate("customerPhoneNumber", this.state.customerPhoneNumber)
      ) {
        isValidBtn = "failure";
      }
    }
    if (this.state.isCustomerEmail) {
      if (
        !fieldsValidate("customerEmailAddress", this.state.customerEmailAddress)
      ) {
        isValidBtn = "failure";
      }
    }
    if (!this.state.isCustomerEmail && !this.state.isCustomerPhone) {
      isValidBtn = "failure";
    }
    if (!Object.keys(this.props.agentDetails).length) {
      if (!sumbitCounter) setCookie("Counter", 0, 1);
      if (!sumbitTime) setCookie("Time", new Date().getTime(), 1);

      if (sumbitCounter >= 3) {
        if (Math.floor((new Date().getTime() - sumbitTime) / 1000) > 600) {
          setCookie("Time", new Date().getTime(), 1);
          setCookie("Counter", 0, 1);
        } else {
          this.setState({
            sendModalStatus: "failure"
          });
          isValidBtn = "failure";
        }
      }
    }

    if (isValidBtn === "success") {
      if (
        this.state.companyCode === 6 &&
        this.state.selectedProcess.sendBy === "digital"
      ) {
        this.setState({
          isDisclaimerModal: true
        });
      } else {
        this.fetchInsuRequest();
      }
    } else {
      this.setState({
        isSubmitValid: false
      });
    }
  };

  fetchGetAgentImages = async () => {
    const url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}${this.props.proxyPrefix}/api/v1/getAgentDetails/pic/${
      this.state.agentNumber
      }`;
    const token = this.props.token;

    const options = {
      timeout: 3000,
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json"
      },
      method: "GET"
    };

    let response = await fetch(url, options)
      .then(response => {
        return response;
      })
      .catch(err => {
        return null;
      });

    if (response && response.status && response.status === 200) {
      response = await response.json();

      this.setState({
        agentImages: response.data
      });
    }
  };

  fetchInsuRequest = async () => {
    //The object we send to the API:
    let insuReqObject = {
      requestId: this.state.requestId,
      images: this.state.images,
      agentName: this.state.agentName,
      agentNumber: this.state.agentNumber,
      companyCode: this.state.companyCode,
      agentEmail: this.state.agentEmail,
      agentCell: this.state.agentCell,
      agentPhoneNumber:
        this.state.agentPhoneNumberPrefix + this.state.agentPhoneNumber,
      processName: this.state.processName,
      processId: this.state.selectedProcess.processId,
      sendBy: this.state.selectedProcess.sendBy,
      claimTypeValue: this.state.selectedProcess.claimTypeValue || "",
      customerFirstName: this.state.customerFirstName,
      customerLastName: this.state.customerLastName,
      customerPhoneNumber:
        this.state.customerPhoneNumberPrefix + this.state.customerPhoneNumber,
      customerEmailAddress: this.state.customerEmailAddress,
      customerNumber:
        this.state.customerNumber === "" ? "1" : this.state.customerNumber,
      customerId: this.state.customerId,
      customerPolicyNumber: this.state.customerPolicyNumber
    };

    try {
      let isSuccessResponse = "failure";

      this.setState({ btnHold: true, spinnerShow: true }, async () => {
        const url = `${window.location.protocol}//${window.location.hostname}:${
          window.location.port
          }${this.props.proxyPrefix}/api/v1/sendInsuRequest`;
        const token = this.props.token;

        const options = {
          timeout: 3000,
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(insuReqObject)
        };

        let response = await fetch(url, options)
          .then(response => {
            return response;
          })
          .catch(err => {
            return null;
          });

        if (response && response.status && response.status === 200) {
          isSuccessResponse = "success";
          // check if validated agent or not
          if (!Object.keys(this.props.agentDetails).length) {
            sessionStorage.setItem("agentName", this.state.agentName);
            sessionStorage.setItem("agentNumber", this.state.agentNumber);
            sessionStorage.setItem("agentEmail", this.state.agentEmail);
            sessionStorage.setItem(
              "agentPhoneNumber",
              this.state.agentPhoneNumber
            );
            sessionStorage.setItem(
              "agentPhoneNumberPrefix",
              this.state.agentPhoneNumberPrefix
            );
            let counter = getCookie("Counter");
            if (!counter) setCookie("Counter", 1);
            else setCookie("Counter", parseInt(counter) + 1, 1);
          }

          this.setState({
            customerLastName: "",
            customerFirstName: "",
            customerId: "",
            customerPolicyNumber: "",
            customerPhoneNumber: "",
            customerEmailAddress: "",
            processName: "",
            isCustomerPhone: false,
            isCustomerEmail: false,
            sendModalStatus: isSuccessResponse,
            isSubmitValid: true,
            spinnerShow: false
          });
        } else {
          this.setState({
            sendModalStatus: isSuccessResponse,
            spinnerShow: false
          });
        }
      });
    } catch (e) {
      console.log(`[fetchInsuRequest] - ${e}`);
    }
  };

  updateContrastState = () => {
    this.setState({ contrastMode: !this.state.contrastMode });
  };

  render() {
    return (
      <DigitalProcessStyle
        proxyPrefix={this.props.proxyPrefix}
        contrastMode={this.state.contrastMode}
      >
        <div className="digital-inner">
          <div className="mainHeader">
            <div className="main-header-inner">
              <div className="logoWrapper">
                <div className="img-wrapper">
                  <img
                    alt="לוגו מנורה מבטחים"
                    className="logo"
                    src={`${this.props.proxyPrefix}/static/img/logo.svg`}
                  />
                </div>
              </div>
              <div className="headerTitle">
                <div className="title">
                  <MainTitleStyles proxyPrefix={this.props.proxyPrefix}>
                    <div className="header-lg-top-title ">
                      שליחת תהליכים דיגיטליים
                    </div>
                    <div className="header-md-main-title">
                      לאפשר ללקוחותיך ביצוע תהליכים דיגיטליים באופן פשוט ומהיר
                    </div>
                  </MainTitleStyles>
                </div>
              </div>

              <div className="logoWrapper" />
            </div>
          </div>
          <div className="mainHeaderMobile">
            <MobileHeader
              proxyPrefix={this.props.proxyPrefix}
              onContrastClick={this.updateContrastState}
              contrastMode={this.state.contrastMode}
            />
          </div>
          <div className="background">
            <div className="stepsContainer">
              <StepCard
                stepNumber="1"
                transform="matrix(2.95045 0 0 3.00909 18 39.99)"
                active={this.state.currentStep == 0}
                contrastMode={this.state.contrastMode}
              />
              <div className="line" />
              <StepCard
                stepNumber="2"
                transform="matrix(2.95045 0 0 3.00909 13.603 39.99)"
                active={this.state.currentStep == 1}
                contrastMode={this.state.contrastMode}
              />
              <div className="line" />
              <StepCard
                stepNumber="3"
                left="0.5%"
                transform="matrix(2.95045 0 0 3.00909 13.603 39.99)"
                active={this.state.currentStep == 2}
                contrastMode={this.state.contrastMode}
              />
            </div>
          </div>
          <div className="main">
            <div className="main-inner">
              <div className="mainRight">
                <div className="main-col-inner">
                  <Card
                    contrastMode={this.state.contrastMode}
                    proxyPrefix={this.props.proxyPrefix}
                    ref={this.agentHead}
                    componentName="AgentDetails"
                    onDigitalProcessChange={this.onDigitalProcessChange}
                    agentNumber={this.state.agentNumber}
                    agentPhoneNumber={this.state.agentPhoneNumber}
                    agentPhoneNumberPrefix={this.state.agentPhoneNumberPrefix}
                    agentEmail={this.state.agentEmail}
                    agentName={this.state.agentName}
                    title="הפרטים שלי"
                    subTitle={
                      !this.props.agentDetails ||
                        !this.props.agentDetails.agentNumbers ||
                        this.props.agentDetails.agentNumbers.length === 0 ? (
                          <span>
                            אלו הפרטים שהלקוח יראה בתהליך הדיגיטלי.
                          <br />
                            תקבלו עדכונים לתהליך מול הלקוח
                        </span>
                        ) : (
                          <span>
                            אלו התמונות שהלקוח יראה בתהליך הדיגיטלי (לא חובה)
                          <br />
                            ולפרטים שתזינו, תקבלו עדכונים לתהליך מול הלקוח
                        </span>
                        )
                    }
                    step="1"
                    flexGrow="1"
                    isInfoModal={this.state.isInfoModal}
                    agents={this.props.agentDetails.agentNumbers}
                    isSubmitValid={this.state.isSubmitValid}
                    token={this.props.token}
                    agentImages={this.state.agentImages}
                    opswatURL={this.props.opswatURL}
                  />
                </div>
              </div>
              <div className="mainCenter">
                <div className="main-col-inner">
                  <Card
                    contrastMode={this.state.contrastMode}
                    proxyPrefix={this.props.proxyPrefix}
                    ref={this.sendDataHead}
                    componentName="CustomerSendType"
                    onDigitalProcessChange={this.onDigitalProcessChange}
                    selectedProcess={this.state.selectedProcess}
                    processName={this.state.processName}
                    companyCode={this.state.companyCode}
                    digitalProcesses={this.props.digitalProcesses}
                    searchStr={this.state.searchStr}
                    isSelected={this.state.isSearchSelected}
                    agentsPilotArr={this.props.agentsPilotArr}
                    agentNumber={this.state.agentNumber}
                    title="מה לשלוח ללקוח?"
                    subTitle={<span />}
                    step="2"
                    flexGrow="1"
                  />
                </div>
              </div>
              <div className="mainLeft">
                <div className="main-col-inner">
                  <Card
                    contrastMode={this.state.contrastMode}
                    proxyPrefix={this.props.proxyPrefix}
                    ref={this.customerHead}
                    componentName="CustomerDetails"
                    onDigitalProcessChange={this.onDigitalProcessChange}
                    customerFirstName={this.state.customerFirstName}
                    customerLastName={this.state.customerLastName}
                    customerId={this.state.customerId}
                    customerNumber={this.state.customerNumber}
                    customerPolicyNumber={this.state.customerPolicyNumber}
                    customerPhoneNumber={this.state.customerPhoneNumber}
                    customerPhoneNumberPrefix={
                      this.state.customerPhoneNumberPrefix
                    }
                    customerEmailAddress={this.state.customerEmailAddress}
                    isCustomerPhone={this.state.isCustomerPhone}
                    isCustomerEmail={this.state.isCustomerEmail}
                    isSubmitValid={this.state.isSubmitValid}
                    title="פרטי הלקוח שלך"
                    subTitle={
                      <span>
                        באפשרותך לשלוח קישור לתהליך
                        <br />
                        באמצעות דוא"ל ו/או הודעת SMS ללקוח
                      </span>
                    }
                    step="3"
                    flexGrow="1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <button
              className="BtnSend"
              id="BtnSend"
              onClick={this.SendUrlToCustomer}
              disabled={this.state.btnHold}
            >
              <span>שליחת קישור ללקוח</span>
              <div className="spinnerDiv">
                <Spinner display={this.state.spinnerShow} />
              </div>
            </button>
          </div>
          {this.state.isInfoModal ? (
            <InfoModal
              contrastMode={this.state.contrastMode}
              onDigitalProcessChange={this.onDigitalProcessChange}
              proxyPrefix={this.props.proxyPrefix}
            />
          ) : (
              ""
            )}
          {this.state.isDisclaimerModal ? (
            <DisclaimerModal
              onDigitalProcessChange={this.onDigitalProcessChange}
            />
          ) : (
              ""
            )}

          {this.state.sendModalStatus === "success" ||
            this.state.sendModalStatus === "failure" ? (
              <CompletionModal
                proxyPrefix={this.props.proxyPrefix}
                onDigitalProcessChange={this.onDigitalProcessChange}
                responseMode={this.state.sendModalStatus}
              />
            ) : (
              ""
            )}
        </div>
      </DigitalProcessStyle>
    );
  }
}

export default DigitalProcess;
