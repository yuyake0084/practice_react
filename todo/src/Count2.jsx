import React, { Component, PropTypes } from 'react';

class Count2 extends Component {
  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps', props);
  }

  shouldComponentUpdate(props) {
    console.log('shouldComponentUpdate', props);

    return props.num % 2 !== 0;
  }

  componentWillUpdate(nextProps) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return <p>Count: {this.props.num}</p>;
  }
};

Count2.propTypes = {
  num: PropTypes.number.isRequired
};

export default Count2;