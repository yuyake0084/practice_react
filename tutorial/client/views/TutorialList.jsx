import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Timer from './Timer.jsx';

class TutorialList extends Component {
  constructor(...args) {
    super(...args);

    this.state.list = [
      {
        id: 1,
        content: <Timer />
      }
    ];
  }

  render() {
    return (
      <ul className="tutorial__tutorialList">
        {
          this.state.list.map(item => {
            return <li key={item.id}>{item.content}</li>
          })
        }
      </ul>
    );
  }
};

export default TutorialList;