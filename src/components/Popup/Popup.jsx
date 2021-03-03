import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import POPUP from '../../constants/popup';

const Popup = ({ trigger, isWin }) => {
  const lang = useSelector((state) => state.game.language);

  const { LEVEL_UP, CONGRATS } = POPUP[lang];

  return (trigger ? (
    <div className="popup">
      <div className="popup__content">
        <h2 className="popup__text">{isWin ? CONGRATS : LEVEL_UP}</h2>
      </div>
    </div>
  ) : '');
};

Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,
  isWin: PropTypes.bool.isRequired,
};

export default Popup;
