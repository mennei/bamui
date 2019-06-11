import React, {Component} from "react";
import ImageUpload from "./../component/ImageUpload";
import styled from "styled-components";
import TextField from "./../component/TextField";
import DropdownWithText from "./../component/DropdownWithText";
import {phonePrefix} from "./../common/phone.config";

class AgentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onDropdownSelection = agent => {
        if (!agent) {
            this
                .props
                .onChange({
                    target: {
                        name: "agentNumber",
                        value: {
                            number: "",
                            name: "",
                            companyCode: ""
                        }
                    }
                });
        } else 
            this
                .props
                .onChange({
                    target: {
                        name: "agentNumber",
                        value: {
                            number: agent.agentNum,
                            name: agent.agentName
                                ? agent.agentName
                                : agent
                                    .agentFirstName
                                    .concat(agent.agentLastName),
                            companyCode: agent.companyCode
                        }
                    }
                });
        }
    ;

    onDropdownNumber = prefix => {
        this
            .props
            .onChange({
                target: {
                    name: "agentPhoneNumberPrefix",
                    value: prefix
                }
            });
    };

    onAgentDetailsChange = event => {
        this
            .props
            .onChange(event);
    };

    render() {
        return (
            <AgentDetailsStyle>
                {this.props.agents && this.props.agents.length > 0
                    ? (
                        <React.Fragment>
                            <ImageUpload
                                proxyPrefix={this.props.proxyPrefix}
                                onChange={this.onAgentDetailsChange}
                                token={this.props.token}
                                agentImages={this.props.agentImages}
                                opswatURL={this.props.opswatURL}
                                agentNumber={this.props.agentNumber}/>
                            <div className="agent-round agent-select" data-menora-bo='agentSelection'>
                                <DropdownWithText
                                    tabIndex={1}
                                    helper="*סוכן אלמנטרי: מספר פרט בלבד"
                                    menoraAttr={'agentPrefixDropdown'}
                                    data={this
                                    .props
                                    .agents
                                    .map((agent, index) => ({
                                        id: agent,
                                        label: agent.agentNum && agent
                                            .agentNum
                                            .toString()
                                            .concat(" ")
                                            .concat(agent.agentName
                                                ? agent.agentName
                                                : agent.agentFirstName.concat(agent.agentLastName)),
                                        multiVal: {
                                            agentName: agent.agentName,
                                            agentNumber: agent.agentNum
                                        }
                                    }))}
                                    showClearIcon={true}
                                    placeholder="מס' סוכן"
                                    onChange={agent => {
                                    this.onDropdownSelection(agent.id);
                                }}
                                    isSubmitValid={this.props.isSubmitValid}
                                    errorMsg={`נא לבחור מס' סוכן`}
                                    value={this.props.agentName == "סוכן בלבד"
                                    ? ""
                                    : this.props.agentName}/>
                            </div>
                        </React.Fragment>
                    )
                    : (
                        <React.Fragment>
                            <div className="agent-round">
                                <TextField
                                    tabIndex={1}
                                    name="agentName"
                                    fieldName="שם סוכן"
                                    value={this.props.agentName}
                                    onChange={this.onAgentDetailsChange}
                                    isSubmitValid={this.props.isSubmitValid}
                                    type="text"
                                    id="agentName"
                                    errorMsg={`נא להזין שם סוכן תקין`}
                                    maxLength={52}/>
                            </div>
                            <div className="agent-round">
                                <TextField
                                    tabIndex={2}
                                    name="agentNumberField"
                                    id="agentNumber"
                                    fieldName="מס' סוכן"
                                    value={this.props.agentNumber}
                                    onChange={this.onAgentDetailsChange}
                                    isSubmitValid={this.props.isSubmitValid}
                                    type="number"
                                    pattern={`[0-9]*`}
                                    maxLength="6"
                                    errorMsg={`נא להזין מספר סוכן תקין`}
                                    helper={"*סוכן אלמנטרי: מספר פרט בלבד"} 
                                    />
                                    
                            </div>
                        </React.Fragment>
                    )
            } 
            <div className = "agent-round"> 
            <TextField
                tabIndex={3}
                name="agentEmail"
                id="agentEmail"
                fieldName="דוא''ל סוכן"
                helper="לכתובת הדוא''ל זה תקבל עדכונים לתהליך מול הלקוח"
                value={this.props.agentEmail}
                onChange={this.onAgentDetailsChange}
                isSubmitValid={this.props.isSubmitValid}
                type="text"
                errorMsg={`דוא"ל אינו תקין`}
                /> 
            </div>
            <div className="phoneArea agent-round">
                <div className="phoneNumber">
                    <TextField
                        tabIndex={4}
                        name="agentPhoneNumber"
                        id="agentPhoneNumber"
                        fieldName="טל' סוכן"
                        helper="טלפון זה ישמש את הלקוח כשיצטרך את תמיכתך בתהליך"
                        value={this.props.agentPhoneNumber}
                        onChange={this.onAgentDetailsChange}
                        isSubmitValid={this.props.isSubmitValid}
                        type="number"
                        pattern={`[0-9]*`}
                        maxLength={7}
                        errorMsg={`מס' הטלפון אינו תקין`}
                    /> 
                </div> 
                <div className = "phonePrefix" data-menora-bo="agentPhoneNumberPrefix"> 
                    <DropdownWithText 
                        btnTabIndex={5} 
                        menoraAttr={'agentPrefix'} 
                        disabledInput={true} 
                        selected={{
                            id: this.props.agentPhoneNumberPrefix,
                            label: this.props.agentPhoneNumberPrefix
                        }}
                        defaultSelected={phonePrefix[0]} 
                        value={this.props.agentPhoneNumberPrefix} 
                        data={phonePrefix.map((prefix, index) => ({id: prefix, label: prefix}))} 
                        showClearIcon={false} 
                        paperHeight="140px" 
                        //inputPattern={XRegExp("^[\\p{L}-\"'“‘ ]{0,3}$")        }} 
                        onChange={prefix => {this.onDropdownNumber(prefix.id);}}
                    /> 
                </div>
            </div> 
        </AgentDetailsStyle>
        )
    }
}

const AgentDetailsStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .info {
    padding: 0 0.5vw;
  }
  .header-sm-main-title {
    span {
      font-size: 0.9em;
    }
  }

  .notRequired {
    font-size: 12px !important;
    padding-top: 3px;
    padding-right: 2px;
  }

  #customerImagesShow {
    font-size: 18px;
  }



 
`;

export default AgentDetails;
