import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { menuLink } from '../../data/navBarData';
import MenuButton from '../Menu/MenuButton';

import getRandomArray from '../../utils/getRandomArray';
import englishCards from '../../data/englishCards';

const GamePage = ({ getClick }) => {
  const { path, title } = menuLink;
  // const [randomCards, setRandomCards] = useState([]);
  const generateArr = () => {
    const randomArr = getRandomArray(6, englishCards);
    const secondArr = randomArr.map((el) => {
      const newCard = { ...el, card: 2 };
      return newCard;
    });
    const cards = [...randomArr, ...secondArr];
    return cards;
  };
  const cards = generateArr();

  console.log(cards);

  useEffect(() => {

  }, []);

  return (
    <div className="game">
      game

      <MenuButton
        onClick={getClick}
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
