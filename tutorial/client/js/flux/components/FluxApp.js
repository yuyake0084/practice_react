import React, { Component } from 'react';
import AddItem from './AddFlux';

class FluxApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  // onChange() {
  //   this.setState()
  // }

  render() {
    return (
      <div className="tutorial__flux__container">
        <AddItem />
      </div>
    );
  }
};

export default FluxApp;