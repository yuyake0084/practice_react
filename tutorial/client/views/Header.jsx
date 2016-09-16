import React, { PropTypes } from 'react';

const Header = ({ name }) => <h1 className="tutorial__hello__title">Hello, {name}!</h1>;

Header.propTypes = {
  name: PropTypes.string.isRequired
}

export default Header;