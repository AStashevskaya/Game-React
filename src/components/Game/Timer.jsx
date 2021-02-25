import React from 'react';
import PropTypes from 'prop-types';

import addZero from '../../utils/addZero';

// eslint-disable-next-line no-unused-vars
const Timer = ({ isTiming, count, level }) => {
  // const [count, setCount] = useState(60);

  // useEffect(() => {
  //   let timer;
  //   if (level > 0) {
  //     timer = setInterval(() => {
  //       setCount(count - 1);
  //     }, 1000);
  //   }

  //   return function () {
  //     clearInterval(timer);
  //   };
  // }, [isTiming, count]);
  console.log(count);

  return (isTiming ? (
    <div className="score">
      {addZero(count)}
    </div>
  ) : '');
};

Timer.defaultProps = {
  isTiming: false,
  level: 0,
  count: 60,
};

Timer.propTypes = {
  isTiming: PropTypes.bool,
  level: PropTypes.number,
  count: PropTypes.number,
};
export default Timer;
