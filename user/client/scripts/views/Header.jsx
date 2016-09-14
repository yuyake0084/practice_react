import React, { Component } from 'react';
import Router, { History, Link } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.context.router.push('/');
  }

  render() {
    return(
      <header>
        <div>
          <h1>Header</h1>
        </div>
      </header>
    );
  }
};

Header.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Header;