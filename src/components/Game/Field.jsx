import React, {
  useState, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound';
import { useSelector } from 'react-redux';

import swapSound from '../../assets/sounds/swap.mp3';
import correctSound from '../../assets/sounds/correct.mp3';
import Card from './Card';

const GameField = ({
  // eslint-disable-next-line no-unused-vars
  cards, score, setscore, isPlaying, setIsplaying, level,
  // eslint-disable-next-line no-unused-vars
  isFinished, setIsFinished, isReseted, isAutoplaying, finish,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [cardsArr, setCardsArr] = useState([]);
  const [openedCards, setOpendeCards] = useState([]);
  const [machedArr, setmachedArr] = useState([]);
  // eslint-disable-next-line no-unused-vars

  const soundVolume = useSelector((state) => state.music.soundVolume);
  const lang = useSelector((state) => state.game.language);
  const [playSwap] = useSound(swapSound, { volume: soundVolume });
  const [playCorrect] = useSound(correctSound, { volume: soundVolume });

  const isSoundOn = useSelector((state) => state.music.soundOn);

  const handleClick = (card) => {
    if (isSoundOn && !isAutoplaying) playSwap();

    console.log(machedArr, 'mached', openedCards, 'openCards');

    if (!isPlaying || openedCards.length > 2 || machedArr.includes(card) || isAutoplaying) return;

    const flippedCard = cardsArr.find((el) => el.id === card.id);
    flippedCard.isFlipped = true;
    flippedCard.clickedTimes += 1;

    // setCardsArr([...cardsArr]);
    setOpendeCards([...openedCards, card]);
    console.log(cardsArr, openedCards);
  };

  const onStart = useCallback(() => {
    setCardsArr([...cards]);

    if (!isPlaying) setTimeout(() => setIsplaying(!isPlaying), 2000);
  }, [cards, isPlaying, setIsplaying]);
  /// /
  useEffect(() => {
    onStart();
  }, [onStart]);

  // useEffect(() => {

  // }, [level]);

  const onFinish = useCallback(() => {
    cardsArr.forEach((el) => {
      el.isFlipped = false;
    });
    // cant understand why
    setTimeout(() => {
      cardsArr.forEach((el) => {
        el.isFlipped = false;
      });
      // setIsplaying(!isPlaying);
    }, 8000);

    // setIsFinished(!isFinished);
    console.log(isPlaying, 'from onfinish');
    setmachedArr([]);
  }, [cardsArr]);

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

        setmachedArr([...machedArr, a, b]);

        setOpendeCards([]);
      } else {
        setTimeout(() => {
          cardsArr.forEach((el) => {
            if (machedArr.includes(el)) return;
            el.isFlipped = false;
          });
          if (isSoundOn) playSwap();

          setOpendeCards([]);
        }, 800);
      }
    }
  }, [openedCards.length, setscore, setmachedArr, setOpendeCards, score]);

  useEffect(() => {
    const { length } = cards;

    if (length === machedArr.length && isPlaying) setTimeout(() => onFinish(), 1000);
  }, [machedArr.length, onFinish, cards, isPlaying]);

  return (
    <div className="gamefield">
      {cardsArr.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          // activeId={activeId}
          title={lang === 'en' ? card.english : card.russian}
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

// const GameField = ({
//   // eslint-disable-next-line no-unused-vars
//   cards, score, setscore, isPlaying, setIsplaying, level,
//   // eslint-disable-next-line no-unused-vars
//   isFinished, setIsFinished, isReseted, isAutoplaying, finish,
// }) => {
//   // eslint-disable-next-line no-unused-vars
//   const [cardsArr, setCardsArr] = useState(cards);
//   const [openedCards, setOpendeCards] = useState([]);
//   const [machedArr, setmachedArr] = useState([]);
//   // eslint-disable-next-line no-unused-vars
//   const [autoArr, setAutoArr] = useState([]);
//   const [isKeyPlaying, setIsKeyPlaying] = useState(false);
//   const [activeId, setActiveId] = useState(0);

//   const soundVolume = useSelector((state) => state.music.soundVolume);
//   const lang = useSelector((state) => state.game.language);
//   const [playSwap] = useSound(swapSound, { volume: soundVolume });
//   const [playCorrect] = useSound(correctSound, { volume: soundVolume });

//   const isSoundOn = useSelector((state) => state.music.soundOn);

//   const handleClick = (card) => {
//     if (isSoundOn && !isAutoplaying) playSwap();
//     console.log(machedArr, 'mached', openedCards, 'openCards');
// eslint-disable-next-line max-len
//     if (!isPlaying || openedCards.length > 2 || machedArr.includes(card) || isAutoplaying) return;

//     const flippedCard = cardsArr.find((el) => el.id === card.id);
//     flippedCard.isFlipped = true;
//     flippedCard.clickedTimes += 1;

//     // setCardsArr([...cardsArr]);
//     setOpendeCards([...openedCards, card]);
//     console.log(cardsArr, openedCards);
//   };
//   /// /
//   useEffect(() => {
//     console.log(isPlaying);
//     setTimeout(() => setIsplaying(!isPlaying), 2000);
//   }, []);

//   const onFinish = useCallback(() => {
//     setTimeout(() => {
//       setIsplaying(false);
//       cardsArr.forEach((el) => {
//         el.isFlipped = false;
//       });
//     }, 400);
//     setTimeout(() => {
//       setIsplaying(false);
//     }, 400);

//     console.log('from on finish', machedArr, cardsArr, isPlaying);
//     setCardsArr(cardsArr);
//     setmachedArr([]);
//   }, []);

//   /// /

//   // const finishCurrentPart = () => {
//   //   setTimeout(() => {
//   //     cardsArr.forEach((el) => {
//   //       el.isFlipped = false;
//   //     });
//   //   }, 0);
//   //   setIsplaying(false);
//   //   setCardsArr(cardsArr);
//   //   setmachedArr([]);
//   // };

//   const onEnterPress = () => {
//     console.log(cardsArr[activeId - 1]);

//     handleClick(cardsArr[activeId - 1]);
//   };
//   const onSpacePress = () => {
//     setIsKeyPlaying(!isKeyPlaying);
//     if (isKeyPlaying) setActiveId(0);
//     if (!isKeyPlaying) setActiveId(1);
//   };

//   const onRightKey = () => {
//     if (!isKeyPlaying) return;

//     if (cardsArr.length > activeId) {
//       setActiveId(activeId + 1);
//     } else {
//       setActiveId(1);
//     }
//   };

//   const onLeftKey = () => {
//     if (!isKeyPlaying) return;

//     if (activeId > 0) {
//       setActiveId(activeId - 1);
//     } else {
//       setActiveId(cardsArr.length - 1);
//     }
//   };
//   const onkeyPress = ({ code }) => {
//     if (code === 'Space') onSpacePress();
//     if (code === 'Enter') onEnterPress();
//     if (code === 'KeyD') onRightKey();
//     if (code === 'KeyA') onLeftKey();
//     if (code === 'Backquote') finish();
//   };

//   useEffect(() => {
//     document.addEventListener('keypress', onkeyPress);

//     return () => document.removeEventListener('keypress', onkeyPress);
//   }, [activeId, isKeyPlaying]);

//   // useEffect(() => {
//   //   setIsFinished(false);

//   //   if (isSoundOn) playSwap();
//   //   if (!isPlaying) {
//   //     setTimeout(() => {
//   //       setIsplaying(true);
//   //     }, 3000);
//   //   }
//   // }, [isPlaying]);

//   // useEffect(() => {
//   //   setCardsArr([...cards]);
//   //   setIsplaying(false);
//   // }, [cards]);

//   // const checkIfWin = () => {
//   //   const { length } = cards;

//   //   if (length === machedArr.length && isPlaying) {
//   //     setIsFinished(true);
//   //     finishCurrentPart();
//   //   }
//   // };

//   // useEffect(() => {
//   //   if (isReseted) {
//   //     finishCurrentPart();
//   //   }
//   // }, [isReseted]);

//   useEffect(() => {
//     console.log('from open', isPlaying);
//     if (openedCards.length === 2) {
//       const [a, b] = openedCards;
//       if (a.index === b.index && a.id !== b.id) {
//         setTimeout(() => {
//           if (isSoundOn) playCorrect();
//         }, 400);

//         if (a.clickedTimes === b.clickedTimes && a.clickedTimes === 1) {
//           setscore(score + 5);
//         } else {
//           setscore(score + 1);
//         }

//         setmachedArr([...machedArr, a, b]);

//         setOpendeCards([]);
//       } else {
//         setTimeout(() => {
//           cardsArr.forEach((el) => {
//             if (machedArr.includes(el)) return;

//             el.isFlipped = false;
//           });
//           if (isSoundOn) playSwap();
//           // setCardsArr(cardsArr);
//           setOpendeCards([]);
//         }, 800);
//       }
//     }
//   }, [openedCards.length]);

//   useEffect(() => {
//     console.log(machedArr.length);
//     const checkIfWin = () => {
//       const { length } = cards;
//       console.log(machedArr, cards, ('mached + cards'));

//       if (length === machedArr.length && isPlaying) {
//         onFinish();
//         // setIsplaying(false);
//         // finishCurrentPart();
//       }
//     };

//     checkIfWin();
//   }, [machedArr.length]);

//   // const startPlaying = () => {
//   //   setAutoArr([...autoArr, cardsArr[0]]);
//   // };

//   // const onAutoplaying = () => {
//   //   if (isSoundOn) playSwap();
//   //   cardsArr.forEach((el) => {
//   //     el.isFlipped = false;
//   //   });
//   //   setCardsArr([...cardsArr]);
//   //   setTimeout(() => {
//   //     startPlaying();
//   //   }, 0);
//   //   if (score) setscore(0);
//   // };

//   // useEffect(() => {
//   //   if (autoArr.length && autoArr.length <= cardsArr.length) {
//   //     const lastCard = autoArr[autoArr.length - 1];
//   //     const currentCard = cardsArr.find((el) => lastCard.id === el.id);
//   //     currentCard.isFlipped = true;

//   //     setTimeout(() => {
//   //       setCardsArr([...cardsArr]);
//   //     }, 300);

//   //     if (autoArr.length % 2) {
//   //       setTimeout(() => {
//   //         if (isSoundOn) playSwap();
//   //         setscore(score + 5);
//   //       }, 1000);
//   //       setTimeout(() => {
//   //         const second = cardsArr.find((el) => currentCard.id !== el.id
//   //         && currentCard.index === el.index);
//   //         second.isFlipped = true;
//   //         setAutoArr([...autoArr, second]);
//   //       }, 900);
//   //     } else {
//   //       setTimeout(() => {
//   //         const randomCard = cards.find((el) => !el.isFlipped);

//   //         setTimeout(() => {
//   //           if (isSoundOn) playSwap();
//   //           setscore(score + 5);
//   //           setAutoArr([...autoArr, randomCard]);
//   //         }, 600);
//   //       });
//   //     }
//   //   }

//   //   if (autoArr.length === cardsArr.length) {
//   //     setIsFinished(true);
//   //     finishCurrentPart();
//   //   }
//   // }, [autoArr.length, setAutoArr, setCardsArr]);

//   // useEffect(() => {
//   //   if (isAutoplaying) {
//   //     onAutoplaying();
//   //   }
//   // }, [isAutoplaying]);

//   return (
//     <div className="gamefield">
//       {cardsArr.map((card) => (
//         <Card
//           key={card.id}
//           id={card.id}
//           activeId={activeId}
//           title={lang === 'en' ? card.english : card.russian}
//           level={level}
//           frontRotate={isPlaying && !card.isFlipped ? 'front-rotate' : ''}
//           backRotate={isPlaying && !card.isFlipped ? 'back-rotate' : ''}
//           handleClick={() => handleClick(card)}
//           cardID={card.card}
//           image={card.image}
//           isPlaying={isFinished}
//         />
//       ))}
//     </div>
//   );
// };

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
  finish: PropTypes.func.isRequired,
//   correctCards: PropTypes.array,
};

export default GameField;
