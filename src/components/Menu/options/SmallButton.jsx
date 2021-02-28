import React from 'react';
import PropTypes from 'prop-types';
import BlueButton from './BlueButton';

const SmallButton = ({ text, handleClick }) => {
  console.log(text);

  return (
    <BlueButton onClick={handleClick}>
      {text}
    </BlueButton>
  );
};

SmallButton.propTypes = {
  text: PropTypes.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SmallButton;
