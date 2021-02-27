import React from 'react';
import PropTypes from 'prop-types';

import addZero from '../../utils/addZero';

const Timer = ({ isTiming, count }) => (isTiming ? (
  <div className="display">
    {addZero(count)}
  </div>
) : '');

Timer.defaultProps = {
  isTiming: false,
  count: 60,
};

Timer.propTypes = {
  isTiming: PropTypes.bool,
  count: PropTypes.number,
};
export default Timer;
