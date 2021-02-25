import React from 'react';
import PropTypes from 'prop-types';

const Score = ({ score }) => (
  <div className="score">
    score:
    {' '}
    {score}
  </div>
);

Score.defaultProps = {
  score: 0,
};

Score.propTypes = {
  score: PropTypes.number,
};
export default Score;
