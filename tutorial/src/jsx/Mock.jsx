import React, { Component, PropTypes } from 'react';

var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

class ProductRow extends Component {
  render() {
    const name = this.props.product.stocked ? this.props.product.name : <span>{this.props.product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
};

class ProductTable extends Component {
  render() {
    const row = [];
    const lastCategory = null;

    this.props.products.forEach(product => {
      if (product.category !== lastCategory) {
        row.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      row.push(<ProductCategoryRow product={product} key={product.name} />)
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
};

