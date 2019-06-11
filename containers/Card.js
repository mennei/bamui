import React, {Component} from "react";
import styled from "styled-components";
import AgentDetails from "./AgentDetails";
import CustomerSendType from "./CustomerSendType";
import CustomerDetails from "./CustomerDetails";
import HeaderCard from "../component/HeaderCard";

class Card extends Component {
    constructor() {
        super();
    }

    render() {
        let content;
        switch (this.props.componentName) {
            case "AgentDetails":
                content = (<AgentDetails
                    proxyPrefix={this.props.proxyPrefix}
                    onChange={this.props.onDigitalProcessChange}
                    agentNumber={this.props.agentNumber}
                    agentPhoneNumber={this.props.agentPhoneNumber}
                    agentPhoneNumberPrefix={this.props.agentPhoneNumberPrefix}
                    agentEmail={this.props.agentEmail}
                    agentName={this.props.agentName}
                    agents={this.props.agents}
                    isSubmitValid={this.props.isSubmitValid}
                    token={this.props.token}
                    agentImages={this.props.agentImages}
                    opswatURL={this.props.opswatURL}/>);
                break;
            case "CustomerSendType":
                content = (<CustomerSendType
                    onChange={this.props.onDigitalProcessChange}
                    selectedProcess={this.props.selectedProcess}
                    processName={this.props.processName}
                    companyCode={this.props.companyCode}
                    digitalProcesses={this.props.digitalProcesses}
                    searchStr={this.props.searchStr}
                    agentsPilotArr={this.props.agentsPilotArr}
                    agentNumber={this.props.agentNumber}
                    isSelected={this.props.isSelected}/>);
                break;
            case "CustomerDetails":
                content = (<CustomerDetails
                    onChange={this.props.onDigitalProcessChange}
                    customerFirstName={this.props.customerFirstName}
                    customerLastName={this.props.customerLastName}
                    customerId={this.props.customerId}
                    customerNumber={this.props.customerNumber}
                    customerPolicyNumber={this.props.customerPolicyNumber}
                    customerPhoneNumber={this.props.customerPhoneNumber}
                    customerPhoneNumberPrefix={this.props.customerPhoneNumberPrefix}
                    customerEmailAddress={this.props.customerEmailAddress}
                    isCustomerPhone={this.props.isCustomerPhone}
                    isCustomerEmail={this.props.isCustomerEmail}
                    isSubmitValid={this.props.isSubmitValid}/>);
                break;
            default:
                break;
        }

        return (
            <CardStyle value={this.props}>
                <div className="header" ref={this.props.forwardRef}>
                    <HeaderCard
                        contrastMode={this.props.contrastMode}
                        title={this.props.title}
                        subTitle={this.props.subTitle}
                        step={this.props.step}
                        onChange={this.props.onDigitalProcessChange}/>
                </div>
                <div className="content">{content}</div>
            </CardStyle>
        );
    }
}

const CardStyle = styled.div `
  display: flex;
  height: 100%;
  flex-direction: column;
  @media (min-width: 1025px) {
    margin: 0 30px;
  }
  @media (min-width: 1025px) and (max-width: 1400px) {
    margin: 0 15px;
  }

  .header {
    text-align: center;
    width: 100%;

    @media (min-width: 1025px) {
      min-height: 120px;
      margin: 0 0 25px;
      flex-basis: 15%;
    }
  }
  .notRequired {
    font-size: 12px !important;
    padding-top: 3px;
    padding-right: 2px;
  }
  .content {
    width: 100%;
    flex-grow: 1;
    flex-basis: 85%;
    @media (min-width: 1025px) {
      padding: 30px;
      background-color: white;
      border-radius: 15px;
      box-shadow: 0 0 21px 0 rgba(0, 0, 0, 0.09);
      .ieClass & {
        flex-grow: 0;
        height: 70%;
        flex-basis: auto;
      }
    }
    @media (max-width: 1024px) {
      padding: 30px 0px;
    }
    .agent-select{
      /* @media (max-width: 1024px) {
        margin-bottom: 20px;
        align-items: center;
      } */
    }
    .phoneArea {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      position: relative;
      margin-bottom: 10px;

      @media (max-width: 1024px) {
        padding: 10px 0 20px;
        margin-bottom: 20px;
        align-items: center;
      }
      .phoneNumber {
        flex-basis: 60%;
        width: 70%;
        margin-left: 20px;
        @media (max-width: 1024px) {
          height: 100%;
          .checkbox{
            position:absolute;
          }
          > div {
            display: block;
            position:relative;
          }
        }
      }
      .phonePrefix {
        width: 30%;
        flex-grow:1;
        @media (min-width: 1025px) {
          margin-bottom: 10px;
        }
        @media (max-width: 1270px) and (min-width: 1025px) {
          width: 40%;
          .MuiInput-underline-9:before {
            bottom: 0;
          }
        }

        @media (max-width: 1024px) {
          width: 40%;
          position: relative;
          top: 9px;
        }
        @media (max-width: 1024px) {
          height: 100%;

          .container {
            div {
              &:before {
                border-bottom: none;
              }
              input {
                color: black !important;
                padding: 5px;
              }
            }
          }
        }
        .ieClass & {
          position: relative;
        }
        input {
          font-size: 16px;
        }
        > div {
          @media (max-width: 1024px) {
            border-bottom: 1px solid #aaa;
          }
        }
      }
    }
    .phoneNumber {
      width: 70%;
      margin-left: 22px;
      @media (max-width: 1270px) and (min-width: 1025px) {
        width: 60%;
        margin-left: 12px;
      }
      .fillHelper {
        @media (max-width: 1024px) {
          /* position: absolute; */
          white-space: nowrap;
        }
      }
      .text-field-outer {
        @media (max-width: 1024px) {
          position: relative;
          margin-bottom: 0;
          >div{
            position: relative;
          }
        }
      }
    }
    .phonePrefix {
      width: 30%;
      position: relative;
      @media (min-width: 1025px) {
        margin-bottom: 24px;
      }

      @media (max-width: 1270px) and (min-width: 1025px) {
        width: 40%;
        .MuiInput-underline-9:before {
          bottom: 0;
        }
      }
      @media (max-width: 1024px) {
        width: 58%;
        .container {
          &:before {
            border-bottom: none;
          }
        }
      }
    }

    input {
      font-size: 16px;
    }
    .ieClass & {
      position: relative;
      bottom: 10px !important;
    }
  }
`;

export default React.forwardRef((props, ref) => (<Card {...props} forwardRef={ref}/>));
