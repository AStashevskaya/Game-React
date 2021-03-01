import React from 'react';
import PropTypes from 'prop-types';
import BlueButton from './BlueButton';

const SmallButton = ({ text, handleClick }) => (
  <BlueButton onClick={handleClick}>
    {text}
  </BlueButton>
);

SmallButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SmallButton;
