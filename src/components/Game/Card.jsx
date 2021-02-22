/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import cardBG from '../../assets/images/cardBG.jpg';

const Card = ({
  title, frontRotate, backRotate, handleClick,
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div className="card" onClick={handleClick}>
    <div className={`card__front ${frontRotate}`} id="card">
      {title}
    </div>
    <div className={`card__back ${backRotate}`}>
      <img src={cardBG} alt="bg" id="card" />
    </div>
  </div>
);

Card.defaultProps = {
  title: '',
  frontRotate: '',
  backRotate: '',
//   isFlipped: false,
//   handleClick: () => {},
};

Card.propTypes = {
  title: PropTypes.string,
  frontRotate: PropTypes.string,
  backRotate: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
//   isFlipped: PropTypes.bool,
};

export default Card;
