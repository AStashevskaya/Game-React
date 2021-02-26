/* eslint-disable func-names */
/* eslint-disable no-console */
import React, { useEffect, useState, useCallback } from 'react';
// import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import useSound from 'use-sound';

import winSound from '../../assets/sounds/win.mp3';

import getRandomArray from '../../utils/getRandomArray';
import englishCards from '../../data/englishCards';
import GameField from './Field';
import Popup from '../Popup/Popup';
import GameOptions from './OptionsGame';

const GamePage = (props) => {
  console.log(props);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsplaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [gameOver, setGameOver] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [level, setLevel] = useState(0);

  const fieldSize = useSelector((state) => state.field.size);
  // const level = useSelector((state) => state.game.level);
  const isSoundOn = useSelector((state) => state.music.soundOn);
  const [play] = useSound(winSound);

  console.log(level);

  const generateCards = useCallback(() => {
    let randomArr = getRandomArray(fieldSize, englishCards);
    randomArr = randomArr.map((el, idx) => {
      const item = { ...el, index: idx + 1, card: 1 };
      return item;
    });

    let cardS = [...randomArr, ...randomArr];
    const { length } = cardS;
    cardS = cardS.map((el, idx) => {
      const newEl = { ...el, id: idx + 1, card: idx >= length / 2 ? 2 : 1 };
      return newEl;
    });
    return cardS;
  });

  const [cards, setCards] = useState(generateCards());

  const updateField = () => {
    // if (level > 1) setStartTiming(true);
    setTimeout(() => {
      console.log('update method');
      setCards(generateCards());
    }, 3000);
  };

  useEffect(() => {
    if (isFinished) {
      setPopupOpen(true);
      if (isSoundOn) play();
    }
  }, [isFinished]);

  useEffect(() => {
    if (popupOpen) {
      setTimeout(() => {
        setPopupOpen(false);
        console.log('useEffect', popupOpen, 'is open');
        setLevel(level + 1);
        // setIsFinished(false);
        updateField();
      }, 3000);
    }
  }, [popupOpen]);

  useEffect(() => {
    if (!gameOver && level !== 0) {
      setTimeout(() => {
        setPopupOpen(false);
        console.log('useEffect', popupOpen);
        updateField();
      }, 3000);
    }
  }, [popupOpen]);

  return (
    <div className="game">
      <Popup
        trigger={popupOpen}
        gameOver={gameOver}
      />
      <GameField
        level={level}
        cards={cards}
        score={score}
        setscore={setScore}
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        isFinished={isFinished}
        setIsFinished={setIsFinished}
      />
      <GameOptions
        score={score}
        level={level}
      />

    </div>
  );
};

// GamePage.propTypes = {
//   update: PropTypes.func.isRequired,
//   gameOver: PropTypes.bool.isRequired,
//   setGameOver: PropTypes.func.isRequired,
//   popupOpen: PropTypes.bool.isRequired,
//   setPopupOpen: PropTypes.func.isRequired,
// };

export default GamePage;
