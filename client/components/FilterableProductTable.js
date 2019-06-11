import React, { Component } from "react";
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
const conf = require('../../server.config');

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterType: 'select',
      filterLength: null,
      token: this.props.token
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText,
      filterLength: document.getElementsByTagName('tr').length - 1
    });
  }

  handleFilterTypeChange(filterType) {
    this.setState({
      filterType: filterType
    });
  }

  render() {
    return (
      <div className="item11">
        <SearchBar
          products={this.props.products}
          // products={data}
          filterText={this.state.filterText}
          filterType={this.state.filterType}
          filterLength={this.state.filterLength}
          onFilterTextChange={this.handleFilterTextChange}
          onFilterTypeChange={this.handleFilterTypeChange}
        />
        <div className="table-wrapper">
          <ProductTable
            products={this.props.products}
            // products={data}
            filterText={this.state.filterText}
            filterType={this.state.filterType}
          />
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;
