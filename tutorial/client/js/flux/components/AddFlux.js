import React, { Component } from 'react';
import { addItem, getRandom } from '../actions/FluxActions';

class AddFlux extends Component {
  constructor() {
    super();
    this.add = this.add.bind(this);
  }

  add() {
    addItem();
  }

  random() {
    getRandom();
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.add}
          className="tutorial__flux__btn add">
          Add!
        </button>
        <button
          type="button"
          onClick={this.random}
          className="tutorial__flux__btn random">
          Random!
        </button>
      </div>
    );
  }
};

export default AddFlux;