/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const GameField = ({ cards }) => {
  const [cardsClosed, setCardsClosed] = useState(false);
  const [openedCards, setOpendeCards] = useState([]);
  const [mached, setMached] = useState([]);

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
  console.log(setArr1);

  useEffect(() => {
    if (openedCards.length === 2) {
      const [a, b] = openedCards;
      if (a.index === b.index) {
        setMached([...mached, a, b]);
        setOpendeCards([]);
      } else {
        setTimeout(() => {
          arr1.forEach((el) => {
            el.isFlipped = false;
          });
          setArr1(arr1);
          setOpendeCards([]);
        }, 800);
      }
    }
  }, [openedCards]);

  const handleClick = (card) => {
    const flippedCard = arr1.find((el) => el.id === card.id);
    flippedCard.isFlipped = true;
    setArr1(arr1);
    setOpendeCards([...openedCards, card]);
  };

  console.log(arr1);

  return (
    <div className="gamefield">
      {arr1.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          frontRotate={cardsClosed && !card.isFlipped ? 'front-rotate' : ''}
          backRotate={cardsClosed && !card.isFlipped ? 'back-rotate' : ''}
          handleClick={() => handleClick(card)}
          isFlipped={card.isFlipped}
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
