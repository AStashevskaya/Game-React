import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { menuLink } from '../../data/navBarData';
import MenuButton from '../Menu/MenuButton';

import getRandomArray from '../../utils/getRandomArray';
import englishCards from '../../data/englishCards';
import GameField from './GameField';

const GamePage = () => {
  const { path, title } = menuLink;

  const fieldSize = useSelector((state) => state.field.size);
  // const [randomCards, setRandomCards] = useState([]);
  const generateArr = () => {
    let randomArr = getRandomArray(fieldSize, englishCards);
    randomArr = randomArr.map((el, idx) => ({ ...el, index: idx + 1 }));
    let cards = [...randomArr, ...randomArr];
    cards = cards.map((el, idx) => ({ ...el, id: idx + 1 }));
    return cards;
  };
  const cards = generateArr();
  console.log(cards);

  useEffect(() => {

  }, []);

  return (
    <div className="game">
      <GameField cards={cards} />
      <MenuButton
        text={title}
        path={path}
      />
    </div>
  );
};

// GamePage.defaultProps = {

//   getClick: () => {},
//   // fieldSize: 12,
// };

// GamePage.propTypes = {
//   getClick: PropTypes.func,
//   // fieldSize: PropTypes.number,
// };

export default GamePage;
