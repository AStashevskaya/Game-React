/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import { useSelector } from 'react-redux';

import MyButton from './options/MyButton';
import soundButton from '../../assets/sounds/button.mp3';

const MenuButton = ({ path, text }) => {
  const [play] = useSound(soundButton);
  const isSoundOn = useSelector((state) => state.music.soundOn);

  const handleClick = () => {
    if (isSoundOn) {
      play();
    }
  };

  return (
    <li onMouseDown={handleClick}>
      <Link to={path}>
        <MyButton>
          {text}
        </MyButton>
      </Link>
    </li>
  );
};
MenuButton.defaultProps = {
  path: '',
  text: '',
};

MenuButton.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
};

export default MenuButton;
