/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { menuLink } from '../../data/navBarData';
import menuLinks from '../../constants/localisation/menuLinks';
import { GAME_BTNS, GAME_DISPLAYS } from '../../constants/localisation/btns';
import MenuButton from '../Menu/MenuButton';
import SmallButton from '../Menu/options/SmallButton';
import Display from './Display';
import Timer from './Timer';

const GameOptions = ({
  // eslint-disable-next-line react/prop-types
  score, level, count, setCount, isWin, finish, reset, autoplay,
}) => {
  const { path, title } = menuLink;
  const [startTiming, setStartTiming] = useState(false);
  const lang = useSelector((state) => state.game.language);

  const { SCORE, LEVEL } = GAME_DISPLAYS[lang];
  const { NEW_GAME, FINISH, AUTO_PLAY } = GAME_BTNS[lang];
  const { MENU } = menuLinks[lang];

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

        <div className="game__buttons">
          <Display text={`${LEVEL}: ${level + 1}`} />
          <Display text={`${SCORE}: ${score}`} />

          <Timer
            isTiming={startTiming}
            level={level}
            count={count}
          />
        </div>
        <div className="game__buttons">
          <SmallButton text={NEW_GAME} handleClick={reset} />
          <SmallButton text={FINISH} handleClick={finish} />
          <SmallButton text={AUTO_PLAY} handleClick={autoplay} />
        </div>

        <MenuButton
          text={MENU}
          path={path}
        />
      </>
    </div>
  );
};

GameOptions.defaultProps = {
  score: 0,
  // level: 0,
  // count: 63,
};

GameOptions.propTypes = {
  score: PropTypes.number,
  // level: PropTypes.number,
  // count: PropTypes.number,
  // setCount: PropTypes.func.isRequired,
  // isWin: PropTypes.bool.isRequired,
  // finish: PropTypes.func.isRequired,
  // reset: PropTypes.func.isRequired,
  // autoplay: PropTypes.func.isRequired,
};

export default GameOptions;
