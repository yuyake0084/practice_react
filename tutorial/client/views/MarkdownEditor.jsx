import React, { Component } from 'react';

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);

    this.state = 'Type some *markdown* here!';
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
      <div className="MarkdownEditor">
        <input >
      </div>
    );
  }
};