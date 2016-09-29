import React, { Component } from 'react';
import FluxStore from '../stores/FluxStore';
import AddItem from './AddFlux.jsx';

export default class FluxApp extends Component {
  constructor(props) {
    super(props);
    this.state = FluxStore.getList();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FluxStore.addChangeListener(this.onChange);
  }

  onChange() {
    this.setState(FluxStore.getList());
  }

  render() {
    return (
      <div className="tutorial__flux__container">
        <AddItem />
      </div>
    );
  }
};