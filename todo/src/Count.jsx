import React, { PropTypes } from 'react';

const Count = ({ num }) => <p>Count: {num}</p>;

Count.propTypes = {
  num: PropTypes.number.isRequred
};

export default Count;