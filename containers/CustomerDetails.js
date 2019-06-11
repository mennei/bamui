import React, { Component } from "react";
import styled from "styled-components";
import TextField from "./../component/TextField";
import DropdownWithText from "./../component/DropdownWithText";
import { phonePrefix } from "./../common/phone.config";

class CustomerDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onDropdown = prefix => {
    this.props.onChange({
      target: {
        name: "customerPhoneNumberPrefix",
        value: prefix
      }
    });
  };
  onCustomerDetailsChange = event => {
    this.props.onChange(event);
  };

  render() {
    return (
      <CustomerDetailsStyle>
        <div className="details">
          <TextField
            tabIndex={8}
            data-menora-bo={"customerFirstName"}
            name="customerFirstName"
            fieldName="שם פרטי"
            value={this.props.customerFirstName}
            onChange={this.onCustomerDetailsChange}
            isSubmitValid={this.props.isSubmitValid}
            type="text"
            id="customerFirstName"
            errorMsg="נא להזין מלל באותיות בלבד"
            maxLength={30}
            onlyChars={true}
          />
          <TextField
            tabIndex={9}
            data-menora-bo={"customerLastName"}
            name="customerLastName"
            fieldName="שם משפחה"
            value={this.props.customerLastName}
            onChange={this.onCustomerDetailsChange}
            isSubmitValid={this.props.isSubmitValid}
            type="text"
            id="customerLastName"
            maxLength={30}
            errorMsg="נא להזין מלל באותיות בלבד"
            onlyChars={true}
          />
          <TextField
            tabIndex={10}
            data-menora-bo={"customerId"}
            name="customerId"
            fieldName="ת.ז"
            value={this.props.customerId}
            onChange={this.onCustomerDetailsChange}
            isSubmitValid={this.props.isSubmitValid}
            maxLength="9"
            type="number"
            pattern={`[0-9]*`}
            id="customerId"
            errorMsg={"נא להזין תעודת זהות תקינה" || ""}
          />
          <p className="form-text">
            בחר האם לשלוח את הקישור באמצעות SMS ו/או באמצעות דוא"ל
          </p>

          <div className="phoneArea">
            <div className="phoneNumber phone-details">
              <TextField
                tabIndex={11}
                data-menora-bo={"customerPhoneNumber"}
                name="customerPhoneNumber"
                fieldName="מס' טלפון הודעת SMS"
                value={this.props.customerPhoneNumber}
                onChange={this.onCustomerDetailsChange}
                checkBoxName="isCustomerPhone"
                isCheckBox={true}
                isChecked={this.props.isCustomerPhone}
                isSubmitValid={
                  this.props.isCustomerPhone ||
                  (!this.props.isCustomerPhone && !this.props.isCustomerEmail)
                    ? this.props.isSubmitValid
                    : true
                }
                type="number"
                pattern={`[0-9]*`}
                maxLength={7}
                sibilingValue={this.props.customerEmailAddress}
                id="customerPhoneNumber"
                errorMsg="מס' הטלפון אינו תקין"
              />
            </div>
            <div
              className="phonePrefix"
              data-menora-bo={"customerPrefixPhoneNumber"}
            >
              <DropdownWithText
                btnTabIndex={12}
                menoraAttr={"customerPrefix"}
                disabledInput={true}
                selected={{
                  id: this.props.customerPhoneNumberPrefix,
                  label: this.props.customerPhoneNumberPrefix
                }}
                defaultSelected={phonePrefix[0]}
                value={this.props.customerPhoneNumberPrefix}
                data={phonePrefix.map((prefix, index) => ({
                  id: prefix,
                  label: prefix
                }))}
                showClearIcon={false}
                paperHeight="140px"
                onChange={prefix => {
                  this.onDropdown(prefix.id);
                }}
              />
            </div>
          </div>
          <div className="email-address">
            <TextField
              tabIndex={13}
              name="customerEmailAddress"
              fieldName='דוא"ל לקוח'
              value={this.props.customerEmailAddress}
              onChange={this.onCustomerDetailsChange}
              checkBoxName="isCustomerEmail"
              isCheckBox={true}
              isChecked={this.props.isCustomerEmail}
              isSubmitValid={
                this.props.isCustomerEmail ||
                (!this.props.isCustomerPhone && !this.props.isCustomerEmail)
                  ? this.props.isSubmitValid
                  : true
              }
              type="text"
              sibilingValue={this.props.customerPhoneNumber}
              id="customerEmail"
              errorMsg={`דוא"ל אינו תקין`}
            />
          </div>
        </div>
      </CustomerDetailsStyle>
    );
  }
}

const CustomerDetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  width: 100%;
  height: 100%;


  .email-address, .phone-details {
    @media (max-width: 1024px) {
      position: relative;
      .checkbox {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        margin: 0;
        padding: 0;
        z-index:1;
      }
      >div{
        position:relative;
      }
    }
  }
  .form-text {
    font-family: almoni-neue-aaa-400;
    margin-top:0;
    @media (min-width: 1025px) {
      font-size: 18px;
    }
    @media (max-width: 1024px) {
      font-size: 18px;
      line-height: 1.2;
      padding-bottom: 8px;
    }
  }
  .details {
    width: 100%;
    height: 100%;

    @media (max-width: 1024px) {
      margin-left: 0;
    }
  }

  .attachment {
    width: 100%;
    height: 100%;
  }
  .attachment > div {
    height: 50px;
  }

  .textP {
    font-size: 21.5px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
  }
`;

export default CustomerDetails;
