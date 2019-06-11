import React, { Component } from "react";
import styled from "styled-components";
import CardStyle from "../component/CardStyle";
import MenoraInput from "../component/MenoraInput";
import TextField from "../component/TextField";
import Dropdown from "../component/Dropdown";
import Btn from "../component/Btn";
import { fieldsValidate } from "../common/FieldsValidate";
import { PopUpStyle } from "../premitives/PopUpStyle";
import { ToastContainer, toast, Zoom } from "react-toastify";

class AdminCustomerTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digitalProcesses: this.props.digitalProcesses,
      selectedProcess: null,
      processDisplayName: "",
      processId: "",
      url: "",
      status: "",
      companyCode: "",
      sendBy: "",
      claimTypeValue: "",

      isProcessDisplayNameValid: true,
      isProcessIdValid: true,
      isUrlValid: true,
      isStatusValid: true,
      isCompanyCodeValid: true,
      isSendByValid: true,

      length: 1,
      isSelected: false,
      searchStr: "",

      companyCodeArray: [],
      sendByArray: [],
      claimTypeValueArray: [],
      statusArray: ["pilot", "publish", "disabled"],
      token: this.props.token
    };
  }

  updateArrayFields(digitalProcesses) {
    let companyCodeArrayCopy = new Set([]);
    let sendByArrayCopy = new Set([]);
    let claimTypeValueArrayCopy = new Set([]);

    for (let item of digitalProcesses) {
      if (item.companyCode)
        companyCodeArrayCopy.add(item.companyCode.toString());
      if (item.sendBy) sendByArrayCopy.add(item.sendBy);
      if (item.claimTypeValue) claimTypeValueArrayCopy.add(item.claimTypeValue);
    }
    this.setState({
      companyCodeArray: Array.from(companyCodeArrayCopy),
      sendByArray: Array.from(sendByArrayCopy),
      claimTypeValueArray: Array.from(claimTypeValueArrayCopy)
    });
  }

  componentWillMount() {
    this.updateArrayFields(this.props.digitalProcesses);
  }

  handleDelete = () => {
    if (
      !this.state.selectedProcess ||
      !this.state.selectedProcess.processDisplayName
    ) {
      toast.error("לא הוזן שם תהליך למחיקה", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
        transition: Zoom
      });
      return;
    }

    this.fetchDeleteProcess();
  };

  onAddProcess = () => {
    this.setState({
      selectedProcess: null,
      processDisplayName: "",
      processId: "",
      url: "",
      companyCode: "",
      status: "",
      sendBy: "",
      claimTypeValue: "",
      isProcessDisplayNameValid: true,
      isProcessIdValid: true,
      isUrlValid: true,
      isStatusValid: true,
      isCompanyCodeValid: true,
      isSendByValid: true
    });
  };

  onProcessSelected = (event, selectedProcess) => {
    this.setState({
      selectedProcess,
      processDisplayName: selectedProcess.processDisplayName.toString() || "",
      processId: selectedProcess.processId.toString() || "",
      url: selectedProcess.url.toString() || "",
      status: selectedProcess.status.toString() || "",
      companyCode: selectedProcess.companyCode.toString() || "",
      sendBy: selectedProcess.sendBy.toString() || "",
      claimTypeValue: selectedProcess.claimTypeValue || "",

      // Reset Validators
      isProcessDisplayNameValid: true,
      isProcessIdValid: true,
      isUrlValid: true,
      isStatusValid: true,
      isCompanyCodeValid: true,
      isSendByValid: true
    });
  };

  handleMagnifying = event => {
    this.setState({ searchStr: event.target.value });
  };

  onValidate = (name, value) => {
    let state = fieldsValidate(name, value);
    if (name === "processDisplayName") {
      this.setState({
        isProcessDisplayNameValid: state
      });
    } else if (name === "processId") {
      this.setState({
        isProcessIdValid: state
      });
    } else if (name === "url") {
      this.setState({
        isUrlValid: state
      });
    }
  };

  onAdminCustomerTypesChange = event => {
    let targetType =
      event && event.currentTarget ? event.currentTarget : event.target;

    this.setState({
      [targetType.id]: targetType.value
    });
  };

  addMore = () => {
    this.setState({ length: this.state.length + 1 });
  };

  onDropDownChange = (event, updateType) => {
    if (updateType === "companyCode") {
      this.setState({
        [updateType]: event.id,
        isCompanyCodeValid: event.id
          ? fieldsValidate(updateType, event.id)
          : true
      });
    }
    else if (updateType === "status") {
        this.setState({
          [updateType]: event.id,
          isStatusValid: event.id
            ? fieldsValidate(updateType, event.id)
            : true
        });
    } else if (updateType === "sendBy") {
      fieldsValidate(updateType, event.id);
      this.setState({
        [updateType]: event.id,
        isSendByValid: event.id ? fieldsValidate(updateType, event.id) : true
      });
    } else {
      this.setState({
        [updateType]: event.id
      });
    }
  };

  //Route:
  handleAddUpdateProcess = () => {
    if (
      !this.state.processDisplayName ||
      !this.state.processId ||
      !this.state.url ||
      !this.state.status ||
      !this.state.companyCode ||
      !this.state.sendBy ||
      !this.state.isProcessDisplayNameValid ||
      !this.state.isProcessIdValid ||
      !this.state.isUrlValid ||
      !this.state.isCompanyCodeValid ||
      !this.state.isStatusValid ||
      !this.state.isSendByValid
    ) {
      this.printError(
        "לא ניתן לבצע את הפעולה אנא בדוק שמילאת את השדות הנחוצים"
      );

      return;
    }

    this.fetchUpdateAddProcess();
  };

  fetchDeleteProcess = async () => {
    let objToSend = {
      processDisplayName: this.state.processDisplayName
    };

    try {
      const url = `${window.location.protocol}//${window.location.hostname}:${
        window.location.port
      }${this.props.proxyPrefix}/api/v1/digitalProcesses`;
      const options = {
        timeout: 3000,
        headers: {
          "x-access-token": this.state.token,
          "Content-Type": "application/json"
        },
        method: "DELETE",
        body: JSON.stringify(objToSend)
      };

      let response = await fetch(url, options);

      if (response && response.status && response.status === 200) {
        response = await response.json();

        this.printSuccess("התהליך נמחק בהצלחה");

        this.setState(
          {
            digitalProcesses: response.data.digitalProcessList,
            selectedProcess: null,
            processDisplayName: "",
            sendBy: "",
            url: "",
            processId: "",
            companyCode: "",
            claimTypeValue: ""
          },
          () => {
            this.updateArrayFields(response.data.digitalProcessList);
          }
        );
      } else {
        this.printError("תקלה, הפעולה לא הצליחה אנא נסה שנית");
      }
    } catch (err) {
      console.log("[fetchUpdateAddProcess] - ", err);
    }
  };

  printError = msg => {
    toast.error(msg, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: false,
      transition: Zoom
    });
  };

  printSuccess = msg => {
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: false,
      transition: Zoom
    });
  };

  fetchUpdateAddProcess = async () => {
    let objToSend = {
      processDisplayName: this.state.processDisplayName,
      processId: this.state.processId,
      companyCode: parseInt(this.state.companyCode),
      sendBy: this.state.sendBy,
      url: this.state.url,
      status: this.state.status,
      claimTypeValue: this.state.claimTypeValue
    };

    //For update proccess procedure:
    if (
      this.state.selectedProcess &&
      this.state.selectedProcess.processDisplayName
    ) {
      objToSend[
        "processDisplayNameToUpdate"
      ] = this.state.selectedProcess.processDisplayName;
    }

    try {
      const url = `${window.location.protocol}//${window.location.hostname}:${
        window.location.port
      }/api/v1/digitalProcesses`;
      const options = {
        timeout: 3000,
        headers: {
          "x-access-token": this.state.token,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(objToSend)
      };

      let response = await fetch(url, options);

      if (response && response.status && response.status === 200) {
        response = await response.json();

        this.printSuccess(
          objToSend["processDisplayNameToUpdate"]
            ? "התהליך עודכן בהצלחה"
            : "התהליך נוסף בהצלחה"
        );

        //We want to update the selected process so if we send again the form it
        // will update the current one and will not create new one.
        this.setState(
          {
            digitalProcesses: response.data.digitalProcessList,
            selectedProcess: { ...objToSend }
          },
          () => {
            this.updateArrayFields(response.data.digitalProcessList);
          }
        );
      } else {
        this.printError("תקלה, הפעולה לא הצליחה אנא נסה שנית");
      }
    } catch (err) {
      console.log("[fetchUpdateAddProcess] - ", err);
    }
  };

  render() {
    const { length } = this.state;

    let processes = [...this.state.digitalProcesses];
    // filter by search key
    processes = processes.filter((process, index) =>
      process.processDisplayName.includes(this.state.searchStr)
    );

    let hasMore = processes.length > length * 13 ? true : false;

    processes = processes.slice(0, length * 13);

    return (
      <PopUpStyle>
        <AdminCustomerTypesStyle>
          <div className="AdminCustomerMain">
            <CardStyle className="listItemsCard">
              <div className="search">
                <Btn
                  className="searchBtn"
                  height="25px"
                  width="25px"
                  background="transparent"
                  backgroundHover="transparent"
                  backgroundActive="transparent"
                  handleClick={() => {}}
                >
                  <img
                    id="isSubmitDisabled"
                    src="static/img/magnifying-glass.svg"
                    alt="זכוכית מגדלת"
                  />
                </Btn>
                <TextField
                  tabIndex={1}
                  name="searchTypes"
                  value={this.props.searchStr}
                  onChange={this.handleMagnifying}
                  isSubmitValid={true}
                  type="text"
                  id="searchTypes"
                  isSearchField={true}
                  disabled={this.props.isSelected}
                  placeholder="חפש..."
                  onKeyDownCapture={this.onKeyDownHandler}
                />
              </div>
              <div className="list">
                <CustomerSendTypeStyle id="CustomerSendType">
                  <div className="radioAria" data-menora-bo={"processList"}>
                    {processes.map((process, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            this.state.selectedProcess &&
                            this.state.selectedProcess.processDisplayName ===
                              process.processDisplayName
                              ? "itemDivSelected"
                              : "itemDiv"
                          }
                          onClick={event => {
                            this.onProcessSelected(event, process);
                          }}
                        >
                          {process.processDisplayName}
                        </div>
                      );
                    })}

                    {!this.state.isSelected && hasMore && (
                      <p onClick={this.addMore} className="addMore">
                        + הצג עוד
                      </p>
                    )}
                  </div>
                </CustomerSendTypeStyle>
              </div>
              <div className="buttons">
                <Btn
                  text=""
                  height="50px"
                  width="50px"
                  background="#fbfbfb"
                  backgroundHover="#e6e6e6"
                  backgroundActive="#d9d9d9"
                  handleClick={this.onAddProcess}
                >
                  <img
                    id="isSubmitDisabled"
                    src="static/img/add.svg"
                    alt="הוסף חדש"
                  />
                </Btn>
              </div>
            </CardStyle>
            <CardStyle className="itemEditAddCard">
              <div className="itemEditFlexBlockContainer">
                <div className="itemEditContainerFlex">
                  <div className="textFieldFlexBlockContainer">
                    <div className="textFieldFlexContainer">
                      <div className="textFieldFlexContainerItem">
                        <MenoraInput
                          tabIndex={4}
                          name="processDisplayName"
                          id="processDisplayName"
                          fieldName="Process Display Name"
                          value={this.state.processDisplayName}
                          onChange={this.onAdminCustomerTypesChange}
                          type="text"
                          errorMsg={"שם תהליך אינו תקין"}
                          helper={"שם תהליך אותיות בעברית בלבד"}
                          isSubmitValid={true}
                          onValidate={this.onValidate}
                          isValid={this.state.isProcessDisplayNameValid}
                        />
                      </div>
                      <div className="textFieldFlexContainerItem textFieldFlexContainerItemLeft">
                        <MenoraInput
                          tabIndex={5}
                          name="processId"
                          id="processId"
                          fieldName="Process ID"
                          value={this.state.processId}
                          onChange={this.onAdminCustomerTypesChange}
                          type="text"
                          helper={"מזהה תהליך אותיות באנגלית בלבד"}
                          errorMsg={"מזהה תהליך אינו תקין"}
                          isSubmitValid={true}
                          onValidate={this.onValidate}
                          isValid={this.state.isProcessIdValid}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="textFieldFlexBlockContainer">
                    <div className="textFieldFlexContainer">
                      <div className="textFieldFlexContainerItem">
                        <MenoraInput
                          tabIndex={6}
                          name="url"
                          id="url"
                          fieldName="Url"
                          value={this.state.url}
                          onChange={this.onAdminCustomerTypesChange}
                          type="text"
                          helper={"קישור להתהליך"}
                          errorMsg={"קישור לתהליך אינו תקין"}
                          isSubmitValid={true}
                          onValidate={this.onValidate}
                          isValid={this.state.isUrlValid}
                        />
                      </div>
                      <div className="textFieldFlexContainerItem textFieldFlexContainerItemLeftPilot">
                        <Dropdown
                          tabIndex={7}
                          placeholder={"Status"}
                          disabledInput={true} 
                          isValid={this.state.isStatusValid}
                          selected={{
                            id: this.state.status,
                            label: this.state.status
                          }}
                          defaultSelected={0}
                          value={this.state.status}
                          data={this.state.statusArray.map(
                            (option, index) => ({ id: option, label: option })
                          )}
                          helper="שדה חובה"
                          errorMsg={"חובה לבחור מתוך הרשימה"}
                          showClearIcon={false}
                          paperHeight="140px"
                          onChange={event => {
                            this.onDropDownChange(event, "status");
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="dropDownFlexBlockContainer">
                    <div className="dropDownContainer">
                      <Dropdown
                        tabIndex={8}
                        placeholder={"Company Code"}
                        isValid={this.state.isCompanyCodeValid}
                        helper="רק מספרים"
                        errorMsg="רק מספרים"
                        selected={{
                          id: this.state.companyCode,
                          label: this.state.companyCode
                        }}
                        defaultSelected={0}
                        value={this.state.companyCode}
                        data={this.state.companyCodeArray.map(
                          (option, index) => ({ id: option, label: option })
                        )}
                        showClearIcon={false}
                        paperHeight="140px"
                        onChange={event => {
                          this.onDropDownChange(event, "companyCode");
                        }}
                      />
                      <div className="dropDownMargin">
                        <Dropdown
                          isValid={this.state.isSendByValid}
                          helper="רק אותיות בלי מספרים"
                          errorMsg="רק אותיות בלי מספרים"
                          tabIndex={9}
                          placeholder={"Send By"}
                          selected={{
                            id: this.state.sendBy,
                            label: this.state.sendBy
                          }}
                          defaultSelected={0}
                          value={this.state.sendBy}
                          data={this.state.sendByArray.map((option, index) => ({
                            id: option,
                            label: option
                          }))}
                          showClearIcon={false}
                          paperHeight="140px"
                          onChange={event => {
                            this.onDropDownChange(event, "sendBy");
                          }}
                        />
                      </div>
                      <Dropdown
                        tabIndex={10}
                        placeholder={"Claim Type Value"}
                        selected={{
                          id: this.state.claimTypeValue,
                          label: this.state.claimTypeValue
                        }}
                        defaultSelected={0}
                        value={this.state.claimTypeValue}
                        data={this.state.claimTypeValueArray.map(
                          (option, index) => ({ id: option, label: option })
                        )}
                        showClearIcon={false}
                        paperHeight="140px"
                        onChange={event => {
                          this.onDropDownChange(event, "claimTypeValue");
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="editSaveRemoveCotnainer">
                  <div className="btnSaveEditContainer">
                    <Btn
                      height="50px"
                      text={this.state.selectedProcess ? "עדכן" : "הוסף"}
                      handleClick={this.handleAddUpdateProcess}
                    />
                  </div>
                  <div className="deleteBtnContainer">
                    <Btn
                      text=""
                      height="50px"
                      width="50px"
                      background="white"
                      backgroundHover="#ffe6e6"
                      backgroundActive="#ff8080"
                      handleClick={this.handleDelete}
                    >
                      <img
                        id="isSubmitDisabled"
                        src="static/img/trash.svg"
                        alt="מחק"
                      />
                    </Btn>
                  </div>
                </div>
              </div>
            </CardStyle>
          </div>
          <ToastContainer rtl />
        </AdminCustomerTypesStyle>
      </PopUpStyle>
    );
  }
}
const AdminCustomerTypesStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .AdminCustomerMain {
    height: 80vh;
    width: 82vw;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding: 25px;

    @media (max-width: 1280px) {
      height: 90vh;
      width: 100vw;
    }

    .listItemsCard {
      text-align: center;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 23%;
      z-index: 1;

      .search {
        width: 100%;
        height: 80px;
        border-radius: 15px 15px 0 0;
        padding: 20px 25px 20px 25px;

        .searchBtn {
          position: absolute;
          top: 11px;
          left: 0;
          margin-left: 16px;
          margin-top: 20px;
          font-family: "almoni-neue-aaa-400";
          color: #684eed;
          font-size: 18.5px;
          z-index: 1;
        }
      }
      .list {
        width: 100%;
        flex: 1;
        padding: 0px 25px 20px 25px;
        height: 77%;

        .itemDiv {
          border: 1px solid black;
          margin: 5px;
          font-size: 18px;
          font-family: "almoni-neue-aaa-400";
          cursor: pointer;
          margin-left: 10px;

          &:hover {
            background-color: #ffe47f;
          }

          &:active {
            background-color: #f2c525;
          }
        }

        .itemDivSelected {
          border: 1px solid black;
          margin: 5px;
          font-size: 18px;
          font-family: "almoni-neue-aaa-400";
          cursor: pointer;
          margin-left: 10px;
          background-color: #f2c525;
        }
      }
      .buttons {
        background: #fbfbfb;
        align-items: center;
        width: 100%;
        height: 80px;
        border-radius: 0 0 15px 15px;
        padding: 20px 25px 20px 25px;
        display: flex;
        justify-content: center;
      }
    }

    .itemEditAddCard {
      text-align: center;
      position: relative;
      padding: 5% 10% 15% 10%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 20px;
      width: 65%;

      .itemEditFlexBlockContainer {
        display: block;
        position: relative;
        height: 100%;
        width: 100%;

        .itemEditContainerFlex {
          height: 100%;
          width: 100%;
          position: relative;
          display: flex;
          justify-content: space-between;
          flex-direction: column;

          .errorText {
            font-family: "almoni-neue-aaa-400";
            font-size: 18px;
          }

          .textFieldFlexBlockContainer {
            width: 100%;
            display: block;
            position: relative;

            .textFieldFlexContainer {
              position: relative;
              display: flex;
              flex-direction: row;

              .textFieldFlexContainerItem {
                flex: 1;
              }

              .textFieldFlexContainerItemLeft {
                margin-right: 60px;
              }

              .textFieldFlexContainerItemLeftPilot {
                margin-right: 60px;
                flex: 0.5;
              }
            }
          }

          .dropDownFlexBlockContainer {
            display: block;
            position: relative;

            .dropDownContainer {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              position: relative;

              .dropDownMargin {
                margin-left: 30px;
                margin-right: 30px;
              }
            }
          }
        }

        .editSaveRemoveCotnainer {
          display: flex;
          position: relative;
          left: 50%;
          transform: translate(-50%, -50%);
          justify-content: space-between;
          margin-top: 10%;

          .btnSaveEditContainer {
            width: 25%;
            display: inline-block;

            right: 35%;
            position: relative;
          }
          .deleteBtnContainer {
            float: left;
          }
        }
      }
    }
  }
`;

const CustomerSendTypeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: 5%;

  .radioAria {
    flex: 1;
    margin-top: 12px;
    height: 100%;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 6px;
      height: 50px;
    }
    ::-webkit-scrollbar-track {
      background: whitesmoke;
    }
    ::-webkit-scrollbar-thumb {
      background: #dddddd;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #cccccc;
    }

    .addMore {
      font-size: 20px;
      color: blue;
      cursor: pointer;
      font-family: "almoni-neue-aaa-400";
    }
  }
`;

export default AdminCustomerTypes;
