import React, { Component } from 'react';
import { render } from 'react-dom';
import Count2 from './Count2';
import Manipulator from './Manipulator';

class Counter extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);

    console.log('counstructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <Count2 num={this.state.count} />
        <Manipulator text="countUp" method={this.increment} />
      </div>
    );
  }
}

render(<Counter />, document.getElementById('app'));