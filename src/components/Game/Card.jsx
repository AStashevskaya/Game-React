/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import cardBG from '../../assets/images/cardBG.jpg';

const Card = ({
  title, frontRotate, backRotate, handleClick, image, level, cardID, isPlaying, width,
}) => (
  <div className="card" onClick={handleClick} width={width}>
    <div className={`card__front ${frontRotate}`} id="card">
      {!isPlaying && level
       && cardID === 1 ? <h2>{title + isPlaying}</h2> : <img src={image} alt={title} />}

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
  image: '',
//   isFlipped: false,
//   handleClick: () => {},
};

Card.propTypes = {
  title: PropTypes.string,
  frontRotate: PropTypes.string,
  backRotate: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  image: PropTypes.string,
  level: PropTypes.number.isRequired,
  cardID: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
};

export default Card;
