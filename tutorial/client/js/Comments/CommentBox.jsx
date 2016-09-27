import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, author: 'Pete Hunt', text: 'This is one comment.' },
        { id: 2, author: 'Jordan Walke', text: 'This is *another* comment.' }
      ]
    };
    this.handleCommentsSubmit = this.handleCommentsSubmit.bind(this);
  }

  handleCommentsSubmit(comment) {
    comment.id = Date.now();
    let comments = this.state.data;
    let newComments = comments.concat([comment]);

    this.setState({ data: newComments });
  }

  render() {
    return (
      <div className="tutorial__commentBox">
        <h2>Hello, World!<br />I am a CommentBox.</h2>
        <CommentList data={ this.state.data } />
        <CommentForm onCommentSubmit={ this.handleCommentsSubmit } />
      </div>
    );
  }
};

export default CommentBox;