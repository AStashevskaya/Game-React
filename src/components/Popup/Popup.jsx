import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({ trigger, isWin }) => (trigger ? (
  <div className="popup">
    <div className="popup__content">
      {isWin ? <h2 className="popup__text">Congratulations! You Win</h2> : <h2 className="popup__text">Level up!</h2>}
    </div>
  </div>
) : '');

Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,
  isWin: PropTypes.bool.isRequired,
};

export default Popup;
