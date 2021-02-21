import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { menuLink } from '../../data/navBarData';
import MenuButton from '../Menu/MenuButton';

import getRandomArray from '../../utils/getRandomArray';
import englishCards from '../../data/englishCards';
import GameField from './GameField';
import Score from './Score';

const GamePage = ({ getClick }) => {
  const { path, title } = menuLink;
  const [score, setScore] = useState(0);
  // const [randomCards, setRandomCards] = useState([]);
  const generateCards = () => {
    const randomArr = getRandomArray(6, englishCards);
    let cards = [...randomArr, ...randomArr];
    cards = cards.map((el, idx) => {
      const newEl = { ...el, id: idx + 1 };
      return newEl;
    });
    return cards;
  };

  const cards = generateCards();

  console.log(cards);

  useEffect(() => {

  }, []);

  return (
    <div className="game">
      <Score score={score} />
      <GameField cards={cards} score={score} setscore={setScore} />
      <MenuButton
        getClick={getClick}
        text={title}
        path={path}
      />
    </div>
  );
};

GamePage.defaultProps = {

  getClick: () => {},
};

GamePage.propTypes = {
  getClick: PropTypes.func,
};

export default GamePage;
