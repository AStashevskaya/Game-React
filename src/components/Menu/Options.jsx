/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
import MyButton from './options/MyButton';

import { toggleMusic, toggleSound } from '../../redux/music/action';
import useLocalStorage from '../../hooks/useLocState';

// eslint-disable-next-line import/extensions
import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';

import Selector from './options/Selector';

const OptionsPage = () => {
  const { path, title } = menuLink;
  const [isMusicOn, setisMusicOn] = useLocalStorage('musicOn', false);
  const [isSoundOn, setisSoundOn] = useLocalStorage('soundOn', true);

  const isFs = document.fullscreenElement;
  console.log(isFs);

  const dispatch = useDispatch();

  const switchSound = (e) => {
    e.preventDefault();
    setisSoundOn(!isSoundOn);
    dispatch(toggleSound());
  };

  const switchMusic = (e) => {
    e.preventDefault();
    setisMusicOn(!isMusicOn);
    dispatch(toggleMusic());
  };

  // const switchFS = (e) => {
  //   e.preventDefault();
  //   console.log(isFs);
  // };

  return (
    <div className="options">

      <MyButton color="primary" type="submit" onClick={switchSound}>
        {isSoundOn ? 'Sound on' : 'Sound off'}
      </MyButton>

      <MyButton color="primary" type="submit" onClick={switchMusic}>
        {isMusicOn ? 'Music on' : 'Music off'}
      </MyButton>

      {/* <MyButton color="primary" type="submit" onClick={switchFS}>
        {isMusicOn ? 'Music on' : 'Music off'}
      </MyButton> */}

      <Selector />
      <MenuButton
        text={title}
        path={path}
      />
    </div>

  );
};

// OptionsPage.defaultProps = {
//   getClick: () => {},
// };

// OptionsPage.propTypes = {
//   getClick: PropTypes.func,
// };

export default OptionsPage;
