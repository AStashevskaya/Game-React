import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound';
import { useSelector, useDispatch } from 'react-redux';
import { setLevel } from '../../redux/game/gameAction';

import swapSound from '../../assets/sounds/swap.mp3';
import correctSound from '../../assets/sounds/correct.mp3';
import Card from './Card';

const GameField = ({
  cards, score, setscore, isPlaying, setIsplaying,
}) => {
  const [cardsArr, setCardsArr] = useState(cards);
  const [openedCards, setOpendeCards] = useState([]);
  const [mached, setMached] = useState([]);

  const [playSwap] = useSound(swapSound);
  const [playCorrect] = useSound(correctSound);

  const isSoundOn = useSelector((state) => state.music.soundOn);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('from gamefield', isPlaying, cards);
    if (isSoundOn) playSwap();

    setTimeout(() => {
      setIsplaying(true);
    }, 2000);
  }, [cards, isPlaying]);

  useEffect(() => {
    setCardsArr([...cards]);
    setIsplaying(false);
  }, [cards]);

  const checkIfWin = () => {
    const { length } = cards;

    if (length === mached.length) {
      dispatch(setLevel());

      setTimeout(() => {
        cardsArr.forEach((el) => {
          el.isFlipped = false;
        });
        setIsplaying(false);
      }, 400);

      setCardsArr(cardsArr);
      setMached([]);
    }
  };

  useEffect(() => {
    if (openedCards.length === 2) {
      const [a, b] = openedCards;
      if (a.index === b.index && a.id !== b.id) {
        setTimeout(() => {
          if (isSoundOn) playCorrect();
        }, 400);

        if (a.clickedTimes === b.clickedTimes && a.clickedTimes === 1) {
          setscore(score + 5);
        } else {
          setscore(score + 1);
        }

        setMached([...mached, a, b]);

        setOpendeCards([]);
      } else {
        setTimeout(() => {
          cardsArr.forEach((el) => {
            if (mached.includes(el)) return;

            el.isFlipped = false;
          });
          if (isSoundOn) playSwap();
          setCardsArr(cardsArr);
          setOpendeCards([]);
        }, 800);
      }
    }
  }, [openedCards]);

  useEffect(() => {
    checkIfWin();
  }, [mached.length]);

  const handleClick = (card) => {
    if (isSoundOn) playSwap();

    if (!isPlaying || openedCards.length > 2 || mached.includes(card)) return;

    const flippedCard = cardsArr.find((el) => el.id === card.id);
    flippedCard.isFlipped = true;
    flippedCard.clickedTimes += 1;

    setCardsArr(cardsArr);
    setOpendeCards([...openedCards, card]);
  };

  return (
    <div className="gamefield" width="900px" height="900px">
      {cardsArr.map((card) => (
        <Card
          key={card.id}
          title={card.russian}
          frontRotate={isPlaying && !card.isFlipped ? 'front-rotate' : ''}
          backRotate={isPlaying && !card.isFlipped ? 'back-rotate' : ''}
          handleClick={() => handleClick(card)}
          image={card.image}
        />
      ))}
    </div>
  );
};

GameField.defaultProps = {

  cards: [],
  score: 0,
  setscore: () => {},
  isPlaying: false,
  setIsplaying: () => {},
};

GameField.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cards: PropTypes.array,
  score: PropTypes.number,
  setscore: PropTypes.func,
  isPlaying: PropTypes.bool,
  setIsplaying: PropTypes.func,
//   correctCards: PropTypes.array,
};

export default GameField;
