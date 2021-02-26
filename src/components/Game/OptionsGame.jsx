/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { menuLink } from '../../data/navBarData';
import MenuButton from '../Menu/MenuButton';
import Score from './Score';
import Timer from './Timer';

const GameOptions = ({ score, level }) => {
  const { path, title } = menuLink;
  const [count, setCount] = useState(20);
  const [startTiming, setStartTiming] = useState(false);

  useEffect(() => {
    let timer;
    if (level === 2) {
      console.log(level);
      setStartTiming(true);
      if (count > 0) {
        timer = setInterval(() => {
          setCount(count - 1);
        }, 1000);
      } else {
        // setGameOver(true);
        // setPopupOpen(true);
        // console.log(popupOpen, gameOver);
      }
    }

    return function () {
      clearInterval(timer);
    };
  }, [startTiming, count]);

  return (
    <div className="game__settings">
      <>
        <Score score={score} />
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
};

GameOptions.propTypes = {
  score: PropTypes.number,
  level: PropTypes.number,
};

export default GameOptions;
