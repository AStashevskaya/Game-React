import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const GameField = ({ cards, score, setscore }) => {
  const [cardsClosed, setCardsClosed] = useState(false);
  const [cardsArr, setCardsArr] = useState(cards);
  const [openedCards, setOpendeCards] = useState([]);
  const [mached, setMached] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setCardsClosed(true);
    }, 1000);
  }, [cardsClosed]);

  useEffect(() => {
    if (openedCards.length === 2) {
      const [a, b] = openedCards;
      if (a.index === b.index) {
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
          setCardsArr(cardsArr);
          setOpendeCards([]);
        }, 800);
      }
    }
  }, [openedCards]);

  const handleClick = (card) => {
    if (!cardsClosed || openedCards.length > 2 || mached.includes(card)) return;
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
          title={card.title}
          frontRotate={cardsClosed && !card.isFlipped ? 'front-rotate' : ''}
          backRotate={cardsClosed && !card.isFlipped ? 'back-rotate' : ''}
          handleClick={() => handleClick(card)}
        />
      ))}
    </div>
  );
};

GameField.defaultProps = {

  cards: [],
  score: 0,
  setscore: () => {},
};

GameField.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cards: PropTypes.array,
  score: PropTypes.number,
  setscore: PropTypes.func,
//   correctCards: PropTypes.array,
};

export default GameField;
