import React, { PropTypes } from 'react';

const Header = ({ name }) => <h1 className="header__title">Practice {name}</h1>;

Header.propTypes = {
  name: PropTypes.string.isRequired
}

export default Header;