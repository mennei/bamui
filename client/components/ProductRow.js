import React, { Component, Fragment } from "react";
import { updateMongo } from '../clientActions/actions';

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: '',
      edit: false
    }
    this.handleRowClick = this.handleRowClick.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this);
  }

  handleRowClick(e) {
    console.log(this.state);
    this.setState({ edit: !this.state.edit }, () => {
      console.log(this.state);
    });
  }

  handleFilterTextChange(e) {
    this.setState({ action: '' });
    e.preventDefault();
    //this.props.onFilterTextChange(e.target.value);
  }

  handleFilterTypeChange(e) {
    this.setState({ action: '' });
    e.preventDefault();
    //this.props.onFilterTypeChange(e.target.value);
  }

  UpdateRecord = async (state) => {
    console.log(state);
    try {
      const { action, updateObj, prevObj } = state;
      const response = await updateMongo({
        action,
        updateObj,
        prevObj
      });
      // on success
      if (response) {
        return response.ok;
      }
      // on error
      else {
        return null;
      }
    } catch { }
  }

  handleEdit = async (e) => {
    e.preventDefault();
    const product = this.props.product;
    const newName = this.getName.value;
    const newType = this.getType.value;
    if (newName !== '' & newType !== '') {
      this.setState({
        prevObj: { name: product.name, type: product.type },
        updateObj: { name: newName, type: newType },
        action: 'updateMeClick',
        edit: !this.state.edit
      }, () => {
        console.log(this.state);
        this.UpdateRecord(this.state);
        window.location.reload();
      });
    }
  }

  render() {
    const { edit } = this.state;
    let updateMe;
    const product = this.props.product;
    const name = <div style={{ color: 'red' }}>
      {product.name}
    </div>;
    const type = <div style={{ color: 'red' }}>
      {product.type}
    </div>;
    if (!edit) {
      updateMe = (
        <div className="flex-rows-container">
          <div className="left-wrapper" onDoubleClick={this.handleRowClick}>{name}</div>
          <div className="right-wrapper">{type}</div>
        </div>
      );
    } else {
      updateMe = (
        <Fragment>
          <form onSubmit={this.handleEdit}>
            <div className="input-wrappers">
              <div className="left-wrapper" onDoubleClick={this.handleRowClick}>
                <input type='text' defaultValue={product.name} ref={(input) => this.getName = input} />
              </div>
              <div className="right-wrapper">
                <select className="select-type" onChange={this.handleFilterTypeChange} defaultValue={product.type} ref={(input) => this.getType = input}>
                  <option value="select">--Select Type--</option>
                  <option value="string">string</option>
                  <option value="number">number</option>
                  <option value="object">object</option>
                </select>
              </div>
            </div>
            <button>update</button>
          </form>
        </Fragment>
      );
    }
    return (
      <Fragment>
        {updateMe}
      </Fragment>
    );
  }
}

export default ProductRow;