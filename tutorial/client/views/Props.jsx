import React, { PropTypes } from 'react';

const Props = ({ name }) => <h3 className="tutorial__tutorial__contents">Hello, {name}</h3>

Props.propTypes = {
  name: PropTypes.string.isRequired
};

export default Props;