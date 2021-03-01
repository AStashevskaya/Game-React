import React, {
  useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
// import { setLevel } from '../../redux/game/gameAction';

import swapSound from '../../assets/sounds/swap.mp3';
import correctSound from '../../assets/sounds/correct.mp3';
import Card from './Card';

const GameField = ({
  cards, score, setscore, isPlaying, setIsplaying, level,
  isFinished, setIsFinished, isReseted, isAutoplaying,
}) => {
  const [cardsArr, setCardsArr] = useState(cards);
  const [openedCards, setOpendeCards] = useState([]);
  const [mached, setMached] = useState([]);
  const [autoArr, setAutoArr] = useState([]);

  const [playSwap] = useSound(swapSound);
  const [playCorrect] = useSound(correctSound);

  const isSoundOn = useSelector((state) => state.music.soundOn);
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.addEventListener('resize', onResize);

  //   return () => {
  //     window.removeEventListener('resize', onResize);
  //   };
  // }, [onResize]);

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
    setCardsArr([...cards]);
    setIsplaying(false);
  }, [cards]);

  const finishCurrentPart = () => {
    setTimeout(() => {
      cardsArr.forEach((el) => {
        el.isFlipped = false;
      });
    }, 0);
    setIsplaying(false);
    setCardsArr(cardsArr);
    setMached([]);
  };

  const checkIfWin = () => {
    const { length } = cards;

    if (length === mached.length && isPlaying) {
      setIsFinished(true);
      finishCurrentPart();
    }
  };

  useEffect(() => {
    if (isReseted) {
      finishCurrentPart();
    }
  }, [isReseted]);

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
    if (isSoundOn && !isAutoplaying) playSwap();

    if (!isPlaying || openedCards.length > 2 || mached.includes(card) || isAutoplaying) return;

    const flippedCard = cardsArr.find((el) => el.id === card.id);
    flippedCard.isFlipped = true;
    flippedCard.clickedTimes += 1;

    setCardsArr([...cardsArr]);
    setOpendeCards([...openedCards, card]);
  };

  const startPlaying = () => {
    setAutoArr([...autoArr, cardsArr[0]]);
  };

  const onAutoplaying = () => {
    if (isSoundOn) playSwap();
    cardsArr.forEach((el) => {
      el.isFlipped = false;
    });
    setCardsArr([...cardsArr]);
    setTimeout(() => {
      startPlaying();
    }, 0);
    if (score) setscore(0);
  };

  useEffect(() => {
    if (autoArr.length && autoArr.length <= cardsArr.length) {
      const lastCard = autoArr[autoArr.length - 1];
      const currentCard = cardsArr.find((el) => lastCard.id === el.id);
      currentCard.isFlipped = true;

      setTimeout(() => {
        setCardsArr([...cardsArr]);
      }, 300);

      if (autoArr.length % 2) {
        setTimeout(() => {
          if (isSoundOn) playSwap();
        }, 1000);
        setTimeout(() => {
          const second = cardsArr.find((el) => currentCard.id !== el.id
          && currentCard.index === el.index);
          second.isFlipped = true;
          setAutoArr([...autoArr, second]);
        }, 900);
      } else {
        setTimeout(() => {
          const randomCard = cards.find((el) => !el.isFlipped);

          setTimeout(() => {
            if (isSoundOn) playSwap();
            setAutoArr([...autoArr, randomCard]);
          }, 600);
        });
      }
    }
  }, [autoArr.length, setAutoArr, setCardsArr]);

  useEffect(() => {
    if (isAutoplaying) {
      onAutoplaying();
    }
  }, [isAutoplaying]);

  return (
    <div className="gamefield">
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
  isReseted: PropTypes.bool.isRequired,
  isAutoplaying: PropTypes.bool.isRequired,
//   correctCards: PropTypes.array,
};

export default GameField;
