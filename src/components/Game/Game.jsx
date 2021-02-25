/* eslint-disable no-console */
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import useSound from 'use-sound';

import winSound from '../../assets/sounds/win.mp3';
import { menuLink } from '../../data/navBarData';
import MenuButton from '../Menu/MenuButton';

import getRandomArray from '../../utils/getRandomArray';
import englishCards from '../../data/englishCards';
import GameField from './GameField';
import Score from './Score';
import Timer from './Timer';
import Popup from '../Popup/Popup';

const GamePage = ({ update }) => {
  const { path, title } = menuLink;
  const [score, setScore] = useState(0);
  const [startTiming, setStartTiming] = useState(false);
  const [isPlaying, setIsplaying] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [gameOver, setGameOver] = useState(false);

  const [popupOpen, setPopupOpen] = useState(false);

  const fieldSize = useSelector((state) => state.field.size);
  const level = useSelector((state) => state.game.level);
  const isSoundOn = useSelector((state) => state.music.soundOn);
  const [play] = useSound(winSound);

  const generateCards = () => {
    let randomArr = getRandomArray(fieldSize, englishCards);
    randomArr = randomArr.map((el, idx) => {
      const item = { ...el, index: idx + 1 };
      return item;
    });

    let cardS = [...randomArr, ...randomArr];
    cardS = cardS.map((el, idx) => {
      const newEl = { ...el, id: idx + 1 };
      return newEl;
    });
    return cardS;
  };
  const [cards, setCards] = useState(generateCards());

  useEffect(() => {
    console.log('isPlaying', isPlaying);
    if (level !== 0) {
      update();
      setPopupOpen(true);

      if (isSoundOn) play();

      setTimeout(() => {
        setStartTiming(true);
        setCards(generateCards());
      }, 3000);
    }
  }, [level]);

  useEffect(() => {
    if (!gameOver) {
      setTimeout(() => {
        setPopupOpen(false);
        console.log('close');
      }, 3000);
    }
  }, [popupOpen]);

  const [count, setCount] = useState(60);

  useEffect(() => {
    let timer;
    if (level > 0) {
      if (count > 0) {
        timer = setInterval(() => {
          setCount(count - 1);
        }, 1000);
      } else {
        setGameOver(true);
        setPopupOpen(true);
      }
    }

    return function () {
      clearInterval(timer);
    };
  }, [startTiming, count]);

  return (
    <div className="game">
      <Popup
        trigger={popupOpen}
        gameOver={gameOver}
      />
      <GameField
        cards={cards}
        score={score}
        setscore={setScore}
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
      />
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

    </div>
  );
};

GamePage.propTypes = {
  update: PropTypes.func.isRequired,
};

export default GamePage;
