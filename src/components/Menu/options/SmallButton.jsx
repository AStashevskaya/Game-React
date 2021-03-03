import React from 'react';
import PropTypes from 'prop-types';
import BlueButton from './BlueButton';

const SmallButton = ({ text, handleClick, submit }) => (
  <BlueButton onClick={handleClick} onKeyPress={submit}>
    {text}
  </BlueButton>
);

SmallButton.defaultProps = {
  submit: () => {},
};

SmallButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  submit: PropTypes.func,
};

export default SmallButton;
