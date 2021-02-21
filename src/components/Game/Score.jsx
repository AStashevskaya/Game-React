import React from 'react';
import PropTypes from 'prop-types';

const Score = ({ score }) => {
  console.log(score);

  return (
    <div>
      score:
      {' '}
      {score}
    </div>
  );
};

Score.defaultProps = {
  score: 0,
  //   handleClick: () => {},
};

Score.propTypes = {
  score: PropTypes.number,
};
export default Score;
