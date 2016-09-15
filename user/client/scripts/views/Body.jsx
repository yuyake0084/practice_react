import React, { Component } from 'react';


class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <h1>ポータル {this.state.message}</h1>
    );
  }
};

class ParentBody extends Body {
  componentDidMount() {
    this.setState({
      message: 'huga'
    });
  }
};

export default ParentBody;