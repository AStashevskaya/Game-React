/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { menuLink } from '../../data/navBarData';
import MenuButton from '../Menu/MenuButton';
import Display from './Display';
import Timer from './Timer';

const GameOptions = ({
  score, level, count, setCount, isWin,
}) => {
  const { path, title } = menuLink;
  const [startTiming, setStartTiming] = useState(false);

  useEffect(() => {
    let timer;
    if (level === 2 && !isWin) {
      setTimeout(() => {
        setStartTiming(true);
      }, 4000);

      if (count > 0) {
        timer = setInterval(() => {
          setCount(count - 1);
        }, 1000);
      }
    }

    if (level === 2 && isWin) {
      if (count > 0) {
        timer = setInterval(() => {
          setCount(count - 1);
        }, 100);
      }
    }

    return function () {
      clearInterval(timer);
    };
  }, [count, level]);

  return (
    <div className="game__settings">
      <>
        <Display text={`Level: ${level + 1}`} />
        <Display text={`Score: ${score}`} />

        <Timer
          isTiming={startTiming}
          level={level}
          count={count}
        />
        <MenuButton
          text={title}
          path={path}
        />
      </>
    </div>
  );
};

GameOptions.defaultProps = {
  score: 0,
  level: 0,
  count: 23,
};

GameOptions.propTypes = {
  score: PropTypes.number,
  level: PropTypes.number,
  count: PropTypes.number,
  setCount: PropTypes.func.isRequired,
  isWin: PropTypes.bool.isRequired,
};

export default GameOptions;
