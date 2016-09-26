import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
require('date-utils');

class ContentsAdd extends Component {
  render() {
    const createItem = item => {
      let dt = new Date();
      let nowDate = dt.toFormat('YYYY/MM/DD (DDDD) HH24:MI:SS');

      return (
        <li key={item.id}>
          <p>{nowDate}</p>
          <p className="tutorial__contentsAdd__text">{item.text}</p>
        </li>
      );
    };

    return <ul className="tutorial__contentsAdd__list">{this.props.items.map(createItem)}</ul>;
  }
};

class ContentsAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      text: []
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const nextItem = this.state.items.concat([{ id: Date.now(), text: this.state.text }]);
    const nextText = '';

    this.setState({ items: nextItem, text: nextText });
  }

  render() {
    return (
      <div>
        <form className="tutorial__contentsAdd__form" onSubmit={this.handleSubmit}>
          <input className="tutorial__contentsAdd__inputText" onChange={this.onChange} value={this.state.text} />
          <button className="tutorial__contentsAdd__btn">{`Add ${this.state.items.length + 1} Comments`}</button>
        </form>
        <ContentsAdd items={this.state.items} />
      </div>
    );
  }
};

export default ContentsAddForm;