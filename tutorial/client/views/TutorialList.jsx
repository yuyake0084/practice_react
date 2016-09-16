import React, { Component } from 'react';
import { render } from 'react-dom';
import Props from './Props.jsx';
import Timer from './Timer.jsx';
import ContentsAdd from './ContentsAdd.jsx';

class TutorialList extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      list: [
        { id: 1, content: <Props name="React" /> },
        { id: 2, content: <Timer />},
        { id: 3, content: <ContentsAdd /> }
      ]
    }
  }

  render() {
    return (
      <ul className="tutorial__tutorialList">
        {
          this.state.list.map(item => {
            return (
              <li key={item.id}>
                <h2 className="tutorial__tutorial__title">Lesson {item.id}</h2>
                {item.content}
              </li>
            );
          })
        }
      </ul>
    );
  }
};

export default TutorialList;