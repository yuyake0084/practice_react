import React, { Component, PropTypes } from 'react';

class Child extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map(item =>
          <li key={item.id}>{item.content}</li>
        )}
      </ul>
    );
  }
}

Child.propTypes = {
  list: PropTypes.array.isRequired
};

export default Child;