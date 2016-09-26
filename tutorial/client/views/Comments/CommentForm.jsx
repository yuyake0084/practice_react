import React, { Component } from 'react';

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      text: ''
    };
    this.onChangeAuthorState = this.onChangeAuthorState.bind(this);
    this.onChangeTextState = this.onChangeTextState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeAuthorState(e) {
    this.setState({ author: e.target.value });
  }

  onChangeTextState(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();

    this.props.onCommentSubmit({ author, text });
    if (!text || !author) {
      this.setState({ author: '', text: '' });
    }
  }

  render() {
    return (
      <form className="tutorial__commentForm__form" onSubmit={ this.handleSubmit }>
        <input
          className="tutorial__commentForm__author"
          type="text"
          placeholder="your-name"
          value={this.state.author}
          onChange={this.onChangeAuthorState}
        />
        <input
          className="tutorial__commentForm__text"
          type="text"
          placeholder="say something"
          value={this.state.text}
          onChange={this.onChangeTextState}
        />
        <div className="tutorial__commentForm__submit__container">
          <input className="tutorial__commentForm__submit" type="submit" value="Send!" />
        </div>
      </form>
    );
  }
};

export default CommentForm;