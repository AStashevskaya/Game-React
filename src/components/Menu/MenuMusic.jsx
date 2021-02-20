/* eslint-disable jsx-a11y/media-has-caption */
import React, {
  useRef, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import soundButton from '../../assets/sounds/button.mp3';
import menuMusic from '../../assets/sounds/menu.mp3';

const AudioComponent = ({ isClicked }) => {
  const musicRef = useRef();
  const audioRef = useRef();

  const isMusicOn = useSelector((state) => state.musicOn);
  const isSoundOn = useSelector((state) => state.soundOn);

  const [currentClickSound, setCurrentClickSound] = useState('');
  //   const [currentMusic, setCurrentMusic] = useState('');
  const audio = audioRef.current;
  const music = musicRef.current;

  const setMusic = () => {
    if (!music) return;

    if (isMusicOn) {
      music.play();
      music.loop = true;
    }

    if (!isMusicOn) music.pause();
  };

  useEffect(() => {
    if (currentClickSound !== soundButton) {
      setCurrentClickSound(soundButton);
    }

    if (isClicked && isSoundOn) audio.play();

    setMusic();
  }, [isMusicOn, isSoundOn, currentClickSound, isClicked]);

  // const setMusic = () => {
  //   if (!music) return;
  //   if (MusicOn) {
  //     music.play();
  //     music.loop = true;
  //   }

  //   if (!MusicOn) music.pause();
  // };

  // useEffect(() => {
  //   if (currentClickSound !== soundButton) {
  //     setCurrentClickSound(soundButton);
  //   }

  //   if (isClicked && SoundOn) audio.play();

  //   setMusic();
  // }, [MusicOn, SoundOn, currentClickSound, isClicked]);

  return (
    <>
      <audio
        src={menuMusic}
        ref={musicRef}
      />
      <audio
        src={currentClickSound}
        ref={audioRef}
      />
    </>
  );
};

AudioComponent.defaultProps = {
  // MusicOn: false,
  // SoundOn: false,
  isClicked: false,
  // toggleMusic: () => {},
  // toggleSound: () => {},
  // getClick: () => {},
};

AudioComponent.propTypes = {
  // MusicOn: PropTypes.bool,
  // SoundOn: PropTypes.bool,
  isClicked: PropTypes.bool,
  // toggleMusic: PropTypes.func,
  // toggleSound: PropTypes.func,
  // getClick: PropTypes.func,
};

export default AudioComponent;
