import React, { Component } from 'react';
import { render } from 'react-dom';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0
    }
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }

  componentwillMount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  render() {
    return (
      <div>
        <h2 className="tutorial__tutorial__title">Lesson 1</h2>
        <div className="tutorial__tutorial__contents">
          <p>Connecting: <span className="tutorial__timer__seconds">{this.state.secondsElapsed}</span>s</p>
        </div>
      </div>
    );
  }
};

export default Timer;