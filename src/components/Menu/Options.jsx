/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  FaVolumeUp, FaVolumeMute, FaPlus, FaMinus,
} from 'react-icons/fa';

// import MyButton from './options/MyButton';
import ToggleBtn from '../elements/ToggleBtn';

import {
  toggleMusic, toggleSound, turnDownMusic, turnUpMusic, turnDownSound, turnUpSound,
} from '../../redux/music/action';
import useLocalStorage from '../../hooks/useLocState';

// eslint-disable-next-line import/extensions
import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';
import Title from './options/Title';

import Selector from './options/Selector';

const OptionsPage = () => {
  const { path, title } = menuLink;
  const [isMusicOn, setisMusicOn] = useLocalStorage('musicOn', false);
  const [isSoundOn, setisSoundOn] = useLocalStorage('soundOn', true);
  const [musVolume, setMusVolume] = useLocalStorage('musicVolume', 0.6);
  const [soundVolume, setSoundVolume] = useLocalStorage('soundVolume', 0.6);

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

  const onMusicUp = (e) => {
    e.preventDefault();

    if (musVolume >= 1) return;

    setMusVolume(musVolume + 0.1);
    dispatch(turnUpMusic());
  };

  const onMusicDown = (e) => {
    e.preventDefault();

    if (musVolume <= 0.1) return;

    setMusVolume(musVolume - 0.1);
    dispatch(turnDownMusic());
  };

  const onSoundUp = (e) => {
    e.preventDefault();

    if (soundVolume >= 1) return;
    setSoundVolume(soundVolume + 0.1);

    dispatch(turnUpSound());
  };

  const onSoundDown = (e) => {
    e.preventDefault();

    if (soundVolume <= 0.1) return;

    setSoundVolume(soundVolume - 0.1);

    dispatch(turnDownSound());
  };

  // const switchFS = (e) => {
  //   e.preventDefault();
  //   console.log(isFs);
  // };

  return (
    <div className="options">
      <Title text="options" />
      <div className="options__content">
        <div className="options__item">
          <span>Sound:</span>
          <ToggleBtn
            text={isSoundOn ? <FaVolumeUp /> : <FaVolumeMute />}
            handleClick={switchSound}
          />
        </div>
        <div className="options__item">
          <span>Music:</span>
          <ToggleBtn
            text={isMusicOn ? <FaVolumeUp /> : <FaVolumeMute />}
            handleClick={switchMusic}
          />
        </div>

        <div className="options__item">
          <span>Volume Music:</span>
          <ToggleBtn
            text={<FaPlus />}
            handleClick={onMusicUp}
          />
          <ToggleBtn
            text={<FaMinus />}
            handleClick={onMusicDown}
          />
        </div>

        <div className="options__item">
          <span>Volume Sound:</span>
          <ToggleBtn
            text={<FaPlus />}
            handleClick={onSoundUp}
          />
          <ToggleBtn
            text={<FaMinus />}
            handleClick={onSoundDown}
          />
        </div>

        <Selector />

      </div>
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
