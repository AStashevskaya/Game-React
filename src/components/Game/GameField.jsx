import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const GameField = ({ cards }) => {
  const [cardsClosed, setCardsClosed] = useState(false);
  const [openedCards, setOpendeCards] = useState([]);
  const [mached, setMached] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCardsClosed(true);
    }, 1000);
  }, [cardsClosed]);

  const arr = cards.map((el, idx) => {
    const newEl = { ...el, id: idx + 1 };
    return newEl;
  });

  const [arr1, setArr1] = useState(arr);

  const close = () => {
    setTimeout(() => {
      arr1.forEach((el) => {
        if (!mached.includes(el)) el.isFlipped = false;
      });
      setArr1(arr1);
      setOpendeCards([]);
    }, 800);
  };

  const setCorrect = (a, b) => {
    setCount(count + 1);
    if (a.clickedTimes === b.clickedTimes && a.clickedTimes === 1) {
      setCount(count + 5);
    }
    setMached([...mached, a, b]);
    setOpendeCards([]);
  };

  useEffect(() => {
    if (openedCards.length === 2) {
      const [a, b] = openedCards;
      if (a.index === b.index) {
        setCorrect(a, b);
      } else {
        close();
      }
    }
  }, [openedCards]);

  const handleClick = (card) => {
    if (!cardsClosed || mached.includes(card) || openedCards.includes(card)) return;

    const flippedCard = arr1.find((el) => el.id === card.id);
    flippedCard.isFlipped = true;
    flippedCard.count += 1;

    setArr1(arr1);
    setOpendeCards([...openedCards, card]);
  };

  return (
    <div className="gamefield">
      {arr1.map((card) => (
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
};

GameField.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cards: PropTypes.array,
//   correctCards: PropTypes.array,
};

export default GameField;
