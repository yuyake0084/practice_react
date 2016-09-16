import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './views/Header.jsx';
import TutorialList from './views/TutorialList.jsx';

class App extends Component {
  constructor(...args) {
    super(...args);
  }
  render() {
    return (
      <div>
        <Header name="React"/>
        <TutorialList />
      </div>
    );
  }
};

render(<App />, document.getElementById('app'));