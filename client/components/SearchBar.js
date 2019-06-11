import React, { Component, Fragment } from "react";
import Message from './Message';
import { updateMongo } from '../clientActions/actions';
import Upload from './Upload';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this);
    this.state = {
      action: '',
      delObj: {},
      addObj: {}
    };
  }

  handleFilterTextChange(e) {
    this.setState({ action: '' });
    e.preventDefault();
    this.props.onFilterTextChange(e.target.value);
  }

  handleFilterTypeChange(e) {
    this.setState({ action: '' });
    e.preventDefault();
    this.props.onFilterTypeChange(e.target.value);
  }

  deleteMeClick = e => {
    //console.log(this.state);
    const { products } = this.props;
    const name = this.props.filterText;
    let delData = { name };
    let indexType = Object.keys(products).find(obj => products[obj].name === name);
    if (indexType !== -1 && indexType !== undefined) {
      delData = products[indexType];
      products.splice(indexType, 1);
    }
    this.setState({
      action: 'deleteMeClick',
      delObj: delData
    }, () => {
      this.UpdateRecord(this.state);
      window.location.reload();
    });
  }

  addMeClick = e => {
    const { products, filterText, filterType } = this.props;
    let addData = {
      name: filterText,
      type: filterType === 'select' ? null : filterType
    }
    if (addData.type !== null) {
      this.setState({
        action: 'addMeClick',
        addObj: addData
      }, () => {
        let indexType = Object.keys(products).find(obj => products[obj].name === addData.name);
        if (indexType !== -1 && indexType !== undefined) {
          this.setState({
            action: 'failToAdd'
          }), () => {
            return;
          };
          return;
        }
        products.push(addData);
        this.UpdateRecord(this.state);
        window.location.reload();
      });
    }
  }

  UpdateRecord = async (state) => {
    console.log(state);
    try {
      const { action, addObj, delObj } = state;
      if (action && (addObj || delObj)) {

        const response = await updateMongo({
          action,
          addObj,
          delObj
        });
        // on success
        if (response) {
          return response.ok;
        }
        // on error
        else {
          return null;
        }
      } else {
        return null;
      }
    } catch { }
  }

  render() {
    let addMe;
    if (this.props.filterType !== 'select' && this.props.filterText &&
      this.props.products.filter(item => item.name === this.props.filterText && item.type === this.props.filterType).length >= 1) {
      addMe = (
        <button onClick={this.deleteMeClick}>delete</button>
      );
    }
    else if (this.props.filterType !== 'select' && this.props.filterText &&
      this.props.products.filter(item => item.name === this.props.filterText && item.type === this.props.filterType).length !== 1) {
      addMe = (
        <Fragment>
          <button onClick={this.addMeClick}>add</button>
          <div className="no-suggestions">
            <Message action={this.state.action} />
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment>
      <div className="input-wrappers">
        <div className="left-wrapper">
          <input
            type="text"
            placeholder="Start type name..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
        </div>
        <div className="right-wrapper">
          <select className="select-type" onChange={this.handleFilterTypeChange} value={this.props.filterType}>
            <option value="select">--Select Type--</option>
            <option value="string">string</option>
            <option value="number">number</option>
            <option value="object">object</option>
          </select>
        </div>
      </div>
      {addMe}
      <div>
        <Upload products={this.props.products}/>
      </div>
      </Fragment>
    );
  }
}

export default SearchBar;