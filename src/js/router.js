import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

var App = React.createClass({
  render: function() {
    return  (
      <div>
        <header>
          <ul>
            <li>
              <Link to="app">Dashboard</Link>
            </li>
          </ul>
        </header>
        <RouteHandler />
      </div>
    );
  }
});

var routes = (
  <Route handler={ App } path="/">
    <DefaultRoute handler={ Home } />
    <Route name="about" handler={ About } />
    <Route name="users" handler={ Users }>
      <Route name="recent-users" path="recent" handler={ RecentUsers } />
      <Route name="user" path="/use/:userId" handler={ User } />
      <NotFoundRoute handler={ UserRouteNotFound } />
    </Route>
    <NotFoundRoute handler={ NotFound } />
    <Redirect from="company" to="about" />
  </Route>
);

Router.run(routes, Router.HistoryLocation, Handler => {
  React.render(
    <Handler />,
    document.getElementById('content')
  );
});