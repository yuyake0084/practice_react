import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, History, hashHistory } from 'react-router';
import { render } from 'react-dom';
// import Header from './views/Header.jsx';

class Index extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
};

class Top extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/portal',
      query: '',
      state: ''
    });
  }

  render() {
    return (
      <div>
        <div className="main">
          <h1>ログイン</h1>
          <form onSubmit={ this.handleSubmit }>
            <input placeholder="userId" />
            <input placeholder="password" />
            <div>
              <button type="submit">ログイン</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

Top.contextTypes = {
  router: PropTypes.object.isRequired
};

class Main extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {

  }
};

const Routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={Top} />
    <Route path="/top" component={Top} />
    <Route path="/portal" component={Main}>
    </Route>
  </Route>
);


render(
  <Router history={hashHistory}>{Routes}</Router>,
  document.getElementById('content')
);