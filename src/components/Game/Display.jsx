import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ text }) => (
  <div className="display">
    {text}
  </div>
);

Display.defaultProps = {
  text: '',
};

Display.propTypes = {
  text: PropTypes.string,
};
export default Display;
