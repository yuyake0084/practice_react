import React, { Component } from 'react';
import Comment from './Comment.jsx';
import Remarkable from 'remarkable';

class CommentList extends Component {
  constructor() {
    super();
    this.rawMarkup = this.rawMarkup.bind(this);
  }

  rawMarkup() {
    const md = new Remarkable();
    const rawMarkup = md.render(this.props.dangerouslySetInnerHTML);

    return { __html: rawMarkup };
  }

  render() {
    const commentNodes = this.props.data.map(comment => {
      return (
        <Comment author={ comment.author } key={ comment.id }>
          { comment.text }
        </Comment>
      );
    });

    return (
      <ul className="tutorial__comment__list">
        { commentNodes }
      </ul>
    );
  }
};

export default CommentList;