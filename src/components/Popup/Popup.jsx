import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({ trigger, gameOver }) => (trigger ? (
  <div className="popup">
    <div className="popup__content">
      {gameOver ? <h2 className="popup__text">Congratulations!</h2> : <h2 className="popup__text">Level up!</h2>}
    </div>
  </div>
) : '');

Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

export default Popup;
