import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleMusic, toggleSound } from '../../redux/music/action';
import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';

const OptionsPage = ({ getClick }) => {
  const { path, title } = menuLink;

  const isMusicOn = useSelector((state) => state.musicOn);
  const isSoundOn = useSelector((state) => state.soundOn);
  const dispatch = useDispatch();

  const switchSound = (e) => {
    e.preventDefault();
    dispatch(toggleSound());
    getClick();
  };

  const switchMusic = (e) => {
    e.preventDefault();
    dispatch(toggleMusic());
  };

  return (
    <div className="options">
      <div className="options__button">
        <button type="submit" onClick={switchSound}>
          {isSoundOn ? 'Sound on' : 'Sound off'}
        </button>

      </div>
      <div className="options__button">
        <button type="submit" onClick={switchMusic}>
          {isMusicOn ? 'Music on' : 'Music off'}
        </button>

      </div>
      <MenuButton
        getClick={getClick}
        text={title}
        path={path}
      />
    </div>

  );
};

OptionsPage.defaultProps = {
  getClick: () => {},
};

OptionsPage.propTypes = {
  getClick: PropTypes.func,
};

export default OptionsPage;
