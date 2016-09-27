import React, { Component } from 'react';
import { render } from 'react-dom';
import Props from './Props.jsx';
import Timer from './Timer.jsx';
import Board from './Board.jsx';
import MarkdownEditor from './MarkdownEditor.jsx';
import CommentBox from './Comments/CommentBox.jsx';
import FluxApp from './flux/app';

class TutorialList extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      list: [
        { id: 1, name: 'Props', content: <Props name="React" /> },
        { id: 2, name: 'Timer', content: <Timer />},
        { id: 3, name: 'Board', content: <Board /> },
        { id: 4, name: 'MarkdownEditor', content: <MarkdownEditor /> },
        { id: 5, name: 'CommentBox', content: <CommentBox /> },
        { id: 6, name: 'Flux', content: <FluxApp /> }
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
                <h2 className="tutorial__tutorial__title">Lesson {item.id} <span className="tutorial__tutorial__head">{item.name}</span></h2>
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