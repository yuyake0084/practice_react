import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './views/Header.jsx';
import TutorialList from './views/TutorialList.jsx';
import Footer from './views/Footer.jsx';

class App extends Component {
  constructor(...args) {
    super(...args);
  }
  render() {
    return (
      <div>
        <Header name="React" />
        <TutorialList />
        <Footer name="React" />
      </div>
    );
  }
};

render(<App />, document.getElementById('app'));