import React, { Component } from 'react';
import Remarkable from 'remarkable';

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Type some *markdown* here!'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ value: this.refs.textarea.value });
  }

  rawMarkup() {
    const md = new Remarkable();

    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="tutorial__MarkdownEditor">
        <textarea
          className="tutorial__inputArea"
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value}
        />
        <div
          className="tutorial__outputArea"
          dangerouslySetInnerHTML={this.rawMarkup()}
        />
      </div>
    );
  }
};

export default MarkdownEditor;