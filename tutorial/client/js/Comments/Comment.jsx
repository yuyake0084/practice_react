import React, { Component } from 'react';
import Remarkable from 'remarkable';

class Comment extends Component {
  constructor() {
    super();
    this.rawMarkup = this.rawMarkup.bind(this);
  }

  rawMarkup() {
    const md = new Remarkable();
    const rawMarkup = md.render(this.props.children.toString());

    return { __html: rawMarkup };
  }

  render() {
    return (
      <li>
        <h3 className="tutorial__commentAuthor">{this.props.author}</h3>
        <p className="tutorial__comment__txt" dangerouslySetInnerHTML={this.rawMarkup()} />
      </li>
    );
  }
}

export default Comment;