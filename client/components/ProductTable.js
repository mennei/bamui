import React, { Component, Fragment } from "react";
import ProductRow from './ProductRow'

class ProductTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { filterText, filterType, products } = this.props;
    let rows = [];
    products.forEach((product) => {
      if (product.name !== null && product.name.indexOf(filterText) === -1) {
        return;
      }
      if (product.type !== null && filterType !== 'select' && product.type.indexOf(filterType) === -1) {
        return;
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
    });

    return (
      <Fragment>
        <div className="flex-rows-container">
          <div className="left-wrapper"><b>Name</b></div>
          <div className="right-wrapper"><b>Type</b></div>
        </div>
        <div>{rows}</div>
      </Fragment>
    );
  }
}

export default ProductTable;