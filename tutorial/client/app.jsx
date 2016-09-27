import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './js/Header.jsx';
import TutorialList from './js/TutorialList.jsx';
import Footer from './js/Footer.jsx';

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