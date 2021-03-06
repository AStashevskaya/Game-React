/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useSound from 'use-sound';
import {
  FaVolumeUp, FaVolumeMute, FaPlus, FaMinus, FaCompress, FaExpand,
} from 'react-icons/fa';

// import MyButton from './options/MyButton';
import ToggleBtn from '../elements/ToggleBtn';

import {
  toggleMusic, toggleSound, turnDownMusic, turnUpMusic, turnDownSound, turnUpSound,
} from '../../redux/music/action';
import options from '../../constants/localisation/options';
import menuLinks from '../../constants/localisation/menuLinks';
import toggleLanguage from '../../redux/game/gameAction';
import useLocalStorage from '../../hooks/useLocState';

// eslint-disable-next-line import/extensions
import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';
import Title from './options/Title';
import Selector from './options/Selector';

import soundButton from '../../assets/sounds/button.mp3';

const OptionsPage = () => {
  const { path } = menuLink;
  const [isMusicOn, setisMusicOn] = useLocalStorage('musicOn', false);
  const [isSoundOn, setisSoundOn] = useLocalStorage('soundOn', true);
  const [musVolume, setMusVolume] = useLocalStorage('musicVolume', 0.6);
  const [soundVolume, setSoundVolume] = useLocalStorage('soundVolume', 0.6);
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const [FS, setFS] = useState(false);

  const [play] = useSound(soundButton, { volume: soundVolume });

  const {
    MUSIC, SOUND, SOUND_VOLUME, MUSIC_VOLUME, FULLSCREEN, FIELD_SIZE, LANGUAGE,
  } = options[language];
  const { OPTIONS, MENU } = menuLinks[language];

  useEffect(() => {
    setFS(document.fullscreenElement);
  }, []);

  const dispatch = useDispatch();

  const switchSound = (e) => {
    e.preventDefault();
    if (isSoundOn) play();

    setisSoundOn(!isSoundOn);
    dispatch(toggleSound());
  };

  const switchMusic = (e) => {
    e.preventDefault();
    if (isSoundOn) play();

    setisMusicOn(!isMusicOn);
    dispatch(toggleMusic());
  };

  const onMusicUp = (e) => {
    e.preventDefault();
    if (isSoundOn) play();

    if (musVolume + 0.1 >= 1) return;

    setMusVolume(musVolume + 0.1);
    dispatch(turnUpMusic());
  };

  const onMusicDown = (e) => {
    e.preventDefault();
    if (isSoundOn) play();

    if (musVolume - 0.1 <= 0) return;

    setMusVolume(musVolume - 0.1);
    dispatch(turnDownMusic());
  };

  const onSoundUp = (e) => {
    e.preventDefault();
    if (isSoundOn) play();

    if (soundVolume + 0.1 >= 1) return;
    setSoundVolume(soundVolume + 0.1);

    dispatch(turnUpSound());
  };

  const onSoundDown = (e) => {
    e.preventDefault();
    if (isSoundOn) play();

    if (soundVolume - 0.1 <= 0) return;

    setSoundVolume(soundVolume - 0.1);

    dispatch(turnDownSound());
  };

  const toggleFS = (e) => {
    e.preventDefault();
    if (isSoundOn) play();

    if (FS) {
      setFS(!FS);
      document.exitFullscreen();
    } else {
      setFS(!FS);
      document.documentElement.requestFullscreen().catch((err) => console.log(err));
    }
  };

  const switchLanguage = (e) => {
    e.preventDefault();
    if (isSoundOn) play();

    if (language === 'en') {
      setLanguage('ru');
    } else {
      setLanguage('en');
    }

    dispatch(toggleLanguage());
  };

  return (
    <div className="options">
      <Title text={OPTIONS} />
      <div className="options__content">
        <div className="options__item">
          <span>{SOUND}</span>
          <ToggleBtn
            text={isSoundOn ? <FaVolumeUp /> : <FaVolumeMute />}
            handleClick={switchSound}
          />
        </div>
        <div className="options__item">
          <span>{MUSIC}</span>
          <ToggleBtn
            text={isMusicOn ? <FaVolumeUp /> : <FaVolumeMute />}
            handleClick={switchMusic}
          />
        </div>

        <div className="options__item">
          <span>{MUSIC_VOLUME}</span>
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
          <span>{SOUND_VOLUME}</span>
          <ToggleBtn
            text={<FaPlus />}
            handleClick={onSoundUp}
          />
          <ToggleBtn
            text={<FaMinus />}
            handleClick={onSoundDown}
          />
        </div>

        <div className="options__item">
          <span>{FULLSCREEN}</span>
          <ToggleBtn
            text={FS ? <FaCompress /> : <FaExpand />}
            handleClick={toggleFS}
          />
        </div>

        <div className="options__item">
          <span>{LANGUAGE}</span>
          <ToggleBtn
            text={language === 'en' ? 'en' : 'ru'}
            handleClick={switchLanguage}
          />
        </div>

        <div className="options__item">
          <span>{FIELD_SIZE}</span>
          <Selector />
        </div>

      </div>
      <MenuButton
        text={MENU}
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
