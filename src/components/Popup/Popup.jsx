import React from 'react';
import PropTypes from 'prop-types';
import GameOver from './GameOver';

// import sparkles from '../../assets/images/sparkles.gif';

const Popup = ({ trigger, gameOver }) => (trigger ? (
  <div className="popup">
    <div className="popup__content">
      {gameOver ? <GameOver /> : <h2 className="popup__text">Level up</h2>}
    </div>
  </div>
) : '');

Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

export default Popup;
