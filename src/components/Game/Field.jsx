import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { setLevel } from '../../redux/game/gameAction';

import swapSound from '../../assets/sounds/swap.mp3';
import correctSound from '../../assets/sounds/correct.mp3';
import Card from './Card';

const GameField = ({
  cards, score, setscore, isPlaying, setIsplaying, level, isFinished, setIsFinished,
}) => {
  const [cardsArr, setCardsArr] = useState(cards);
  const [openedCards, setOpendeCards] = useState([]);
  const [mached, setMached] = useState([]);
  const [width, setWidth] = useState(0);

  const [playSwap] = useSound(swapSound);
  const [playCorrect] = useSound(correctSound);

  const isSoundOn = useSelector((state) => state.music.soundOn);
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  const containerRef = useRef(null);
  const container = containerRef.current;
  // useEffect(() => {
  //   if (container) {
  //     width = container.getBoundingClientRect().width;
  //     console.log(width);
  //   }
  // }, [container]);

  const onResize = useCallback(() => {
    console.log(container);
    if (container) {
      setWidth(container.getBoundingClientRect().width);
    }

    console.log(width, container);
  }, [container]);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  // const container = containerRef.current;
  // let width;

  // useEffect(() => {
  //   if (container) {
  //     width = container.getBoundingClientRect();
  //   }
  //   console.log(width);
  // }, [container]);

  // console.log(container);

  useEffect(() => {
    setIsFinished(false);
    console.log('isPlaying', isPlaying, 'isFinished', isFinished);
    if (isSoundOn) playSwap();
    if (!isPlaying) {
      setTimeout(() => {
        setIsplaying(true);
      }, 3000);
    }
  }, [isPlaying]);

  useEffect(() => {
    console.log('cards', cards);
    setCardsArr([...cards]);
    setIsplaying(false);
  }, [cards]);

  // useEffect(() => {
  //   setCardsArr([...cards]);
  //   setIsplaying(false);
  // }, [level]);

  const checkIfWin = () => {
    const { length } = cards;

    if (length === mached.length && isPlaying) {
      setIsFinished(true);
      // dispatch(setLevel());

      setTimeout(() => {
        cardsArr.forEach((el) => {
          el.isFlipped = false;
        });
      }, 0);
      setIsplaying(false);
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
    localStorage.setItem('cards', JSON.stringify(cardsArr));
  }, [openedCards.length]);

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
    <div className="gamefield" ref={containerRef}>
      {cardsArr.map((card) => (
        <Card
          key={card.id}
          title={card.russian}
          level={level}
          frontRotate={isPlaying && !card.isFlipped ? 'front-rotate' : ''}
          backRotate={isPlaying && !card.isFlipped ? 'back-rotate' : ''}
          handleClick={() => handleClick(card)}
          cardID={card.card}
          image={card.image}
          isPlaying={isFinished}
          width={width / 4}
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
  isFinished: PropTypes.bool.isRequired,
  setIsFinished: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
//   correctCards: PropTypes.array,
};

export default GameField;
