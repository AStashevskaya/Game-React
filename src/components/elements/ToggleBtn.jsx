import React from 'react';
import PropTypes from 'prop-types';

const ToggleBtn = ({ text, handleClick }) => (
  <button onClick={handleClick} type="submit" className="toggle-btn">
    {text}
  </button>

);

ToggleBtn.propTypes = {
  text: PropTypes.objectOf.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ToggleBtn;
