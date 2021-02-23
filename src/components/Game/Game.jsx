/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { menuLink } from '../../data/navBarData';
import MenuButton from '../Menu/MenuButton';

import getRandomArray from '../../utils/getRandomArray';
import englishCards from '../../data/englishCards';
import GameField from './GameField';
import Score from './Score';

const GamePage = () => {
  const { path, title } = menuLink;
  const [score, setScore] = useState(0);
  const fieldSize = useSelector((state) => state.field.size);
  // const [randomCards, setRandomCards] = useState([]);
  const generateCards = () => {
    // eslint-disable-next-line no-debugger
    debugger;
    let randomArr = getRandomArray(fieldSize, englishCards);
    randomArr = randomArr.map((el, idx) => {
      const item = { ...el, index: idx + 1 };
      console.log(item);
      return item;
    });
    console.log(randomArr);

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
        text={title}
        path={path}
      />
    </div>
  );
};

export default GamePage;
