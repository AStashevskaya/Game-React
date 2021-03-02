/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import { useSelector } from 'react-redux';

import MyButton from './options/MyButton';
import soundButton from '../../assets/sounds/button.mp3';

const MenuButton = ({ path, text }) => {
  const isSoundOn = useSelector((state) => state.music.soundOn);
  const soundVolume = useSelector((state) => state.music.soundVolume);
  const [play] = useSound(soundButton, { volume: soundVolume });

  // const handleClick = (e) => {
  //   if (isSoundOn) {
  //     play();
  //   }
  //   console.log(e);
  // };
  const handleClick = useCallback(() => {
    if (isSoundOn) play();
  });

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
