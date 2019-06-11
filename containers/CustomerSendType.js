import React, { Component } from "react";
import styled from "styled-components";
import RadioField from "../component/RadioField";
import SearchCustomerTypes from "../component/SearchCustomerTypes";

class CustomerSendType extends Component {
  constructor() {
    super();
    this.state = {
      // how mutch to dsipaly lenght * 6
      length: 1
    };
  }

  onCustomerSendTypeChange = event => {
    this.props.onChange(event);
  };

  addMore = () => {
    this.setState({ length: this.state.length + 1 });
  };
  render() {
    
    const { length } = this.state;
    let processes = [...this.props.digitalProcesses];
    if (this.props.companyCode) {
      //filter by company code
      processes = processes.filter(
        process => process.companyCode == this.props.companyCode
      );
    }

    // filter by search key
    processes = processes.filter(process =>
      process.processDisplayName.includes(this.props.searchStr)
    );


    // filter by process status
    processes = processes.filter(process => process.status !== "disabled");
    let agentNumber = this.props.agentNumber ? parseInt(this.props.agentNumber) : null;
    if (agentNumber) {
      //filter by agentsPilotArr
      processes = processes.filter(
        process =>
          (process.status === "publish") ||
          (process.status === "pilot" && this.props.agentsPilotArr.indexOf(agentNumber) !== -1 )
      );
    } else {
      processes = processes.filter(process => process.status === "publish");
    }
    
    processes = processes.map((process, index) => {
      return (
        <RadioField
          tabIndex={7}
          key={index}
          fieldId={process.processDisplayName}
          selectedProcessId={
            this.props.selectedProcess
              ? this.props.selectedProcess.processDisplayName
              : null
          }
          label={process.processDisplayName}
          onChange={this.onCustomerSendTypeChange}
          processName={this.props.processName}
          value={process}
          color={process.sendBy == "digital" ? "#684eed" : "black"}
        />
      );
    });
    // add more btn visible if lenth of proccesses > 6
    let hasMore = processes.length > length * 6 ? true : false;
    // cut if lenght bigger 6
    processes = processes.slice(0, length * 6);
    return (
      <CustomerSendTypeStyle id="CustomerSendType">
        <SearchCustomerTypes
          searchStr={this.props.searchStr}
          isSelected={this.props.isSelected}
          onChange={this.onCustomerSendTypeChange}
        />
        <div className="radioAria" data-menora-bo={"processList"}>
          {processes}
          {!this.props.isSelected && hasMore && (
            <p onClick={this.addMore} className="addMore">
              + הצג עוד
            </p>
          )}
        </div>
      </CustomerSendTypeStyle>
    );
  }
}

const CustomerSendTypeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .ieClass & {
    display: block;
  }
  .radioAria {
    flex: 1;
    margin: 12px 5px 0 0;
    height: 100%;

    @media (min-width: 1025px) {
      max-height: 300px;
      overflow-y: auto;
    }

    @media (min-width: 1025px) {
      padding-right: 3px;
    }
    ::-webkit-scrollbar {
      width: 6px;
      height: 50px;
    }
    ::-webkit-scrollbar-track {
      background: white;
    }
    ::-webkit-scrollbar-thumb {
      background: #dddddd;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #cccccc;
    }
    .radio {
      width: 24px;
      height: 24px;
      &:before {
        left: 3px !important;
        width: 18px !important;
        height: 18px !important;
      }
      &:after {
        left: 0;
        width: 24px !important;
        height: 24px !important;
        @media (max-width: 1024px) {
          box-shadow: 0 0 0 10px #fff;
          top: 0;
        }
      }
    }
    /* add more btn */
    .addMore {
      margin-right: 20px;
      font-size: 18px;
      color: blue;
      cursor: pointer;
    }
  }
`;

export default CustomerSendType;
