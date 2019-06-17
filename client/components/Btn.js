import React, {Component} from 'react';

import styled from 'styled-components';

import Spinner from './Spinner';

class Btn extends Component {
  constructor () {
    super ();

    this.state = {};
  }

  BtnClick = event => {
    this.props.handleClick (event);
  };

  render () {
    return (
      <BtnStyle value={this.props}>

        <button
          id={this.props.id}
          name={this.props.name}
          onClick={this.BtnClick}
          className={
            this.props.children
              ? this.props.className + ' modal-button imgBtn'
              : this.props.className + ' modal-button'
          }
          disabled={this.props.isDisabled}
          data-menora-bo={this.props.menoraAttr || 'sendBtn'}
        >

          {this.props.children
            ? this.props.children
            : <React.Fragment>

                {this.props.text || 'טקסט כפתור'}

                <div className="spinnerDiv">

                  <Spinner display={this.props.spinnerShow} />

                </div>

              </React.Fragment>}

        </button>

      </BtnStyle>
    );
  }
}

const BtnStyle = styled.div`

  .modal-button {

    font-size: 22px;

    border-radius: 40px;

    text-align: center;

    width: ${props => props.value.width || '100%'};

    height: ${props => props.value.height || '100%'};

    background-color: ${props => (props.value.isDisabled ? '#eaeaea' : props.value.background ? props.value.background : '#ffd028')};

    outline: none;

    border: 1px solid

      ${props => (props.value.isDisabled ? '#eaeaea' : props.value.background ? props.value.background : '#ffd028')};

    font-family: "almoni-neue-aaa-400";

 

    .spinnerDiv {

      position: relative;

      left: 39%;

      top: 0.5vh;

      display: inline-block;

    }

 

    &:hover.modal-button:not([disabled]) {

      background-color:  ${props => (props.value.backgroundHover ? props.value.backgroundHover : '#ffe47f')};

      border: 1px solid ${props => (props.value.backgroundHover ? props.value.backgroundHover : '#ffe47f')};

    }

 

    &:active.modal-button:not([disabled]) {

      background-color: ${props => (props.value.backgroundActive ? props.value.backgroundActive : '#f2c525')};

      border: 1px solid ${props => (props.value.backgroundActive ? props.value.backgroundActive : '#f2c525')};

    }

  }

  .imgBtn {

      display: flex;

      justify-content: center;

      align-items: center;

    }

`;

export default Btn;
