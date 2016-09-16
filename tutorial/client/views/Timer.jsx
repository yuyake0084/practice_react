import React, { Component } from 'react';

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
        <div className="tutorial__tutorial__contents console">
          <p>Connecting:<span className="tutorial__timer__seconds">{this.state.secondsElapsed}s</span></p>
        </div>
      </div>
    );
  }
};

export default Timer;