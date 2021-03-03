/* eslint-disable func-names */
/* eslint-disable no-console */
import React, { useEffect, useState, useCallback } from 'react';
// import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import useSound from 'use-sound';

import winSound from '../../assets/sounds/win.mp3';
// import failSound from '../../assets/sounds/game-over.mp3'

import getRandomArray from '../../utils/getRandomArray';
// import { setScore as saveScore } from '../../redux/game/gameAction';
import englishCards from '../../data/englishCards';
import GameField from './Field';
import Popup from '../Popup/Popup';
import GameOptions from './OptionsGame';

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsplaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isReseted, setIsReseted] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isAutoplaying, setIsAutoplaying] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [count, setCount] = useState(63);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(0);

  const fieldSize = useSelector((state) => state.field.size);
  const isSoundOn = useSelector((state) => state.music.soundOn);
  const soundVolume = useSelector((state) => state.music.soundVolume);

  const [play] = useSound(winSound, { volume: soundVolume });

  const finishGame = () => {
    localStorage.setItem('final-score', JSON.stringify(score));

    setIsplaying(false);
    setIsFinished(false);
    setPopupOpen(false);
  };

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

    // cardS = cardS.sort(() => Math.random() - 0.5);

    return cardS;
  }, [level]);

  const [cards, setCards] = useState(generateCards);

  const updateField = () => {
    setTimeout(() => {
      setCards(generateCards);
    }, 1000);

    if (isPlaying) {
      setIsReseted(!isReseted);
      setIsplaying(!isPlaying);
      setScore(0);
    }
  };

  useEffect(() => {
    if (isFinished) {
      setPopupOpen(true);
      if (isSoundOn) play();
    }
  }, [isFinished]);

  useEffect(() => {
    let timer;
    if (isWin) {
      if (count > 0) {
        timer = setInterval(() => {
          setScore(score + 1);
        }, 100);
      }
    }
    return function () {
      clearInterval(timer);
    };
  }, [isWin, score]);

  useEffect(() => {
    if (popupOpen && level !== 2 && !isAutoplaying) {
      setTimeout(() => {
        setPopupOpen(false);
        setLevel(level + 1);
        updateField();
      }, 3000);
    }

    if (popupOpen && level === 2 && !isAutoplaying) {
      const n = count * 150;

      setIsWin(true);
      setTimeout(() => {
        setPopupOpen(false);
      }, n);
    }

    if (popupOpen && isAutoplaying) {
      setTimeout(() => {
        setPopupOpen(false);
        updateField();
        setScore(0);
        setIsAutoplaying(false);
      }, 3000);
    }
  }, [popupOpen]);

  useEffect(() => {
    if (count <= 0) {
      setGameOver(true);
    }
  }, [count]);

  useEffect(() => {
    if (gameOver) {
      finishGame();

      const url = window.location.href;
      window.location.assign(`${url}-over`);
    }
  }, [gameOver]);

  const finish = () => {
    setGameOver(true);
  };

  const autoplay = () => {
    if (isAutoplaying) return;

    setIsAutoplaying(true);
  };

  return (
    <div className="game">
      <Popup
        trigger={popupOpen}
        isWin={isWin}
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
        isReseted={isReseted}
        isAutoplaying={isAutoplaying}
      />
      <GameOptions
        score={score}
        level={level}
        count={count}
        setCount={setCount}
        isWin={isWin}
        finish={finish}
        reset={updateField}
        autoplay={autoplay}
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
