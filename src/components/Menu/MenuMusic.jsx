/* eslint-disable jsx-a11y/media-has-caption */
import React, {
  useRef, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import soundButton from '../../assets/sounds/button.mp3';
import menuMusic from '../../assets/sounds/menu.mp3';
import gameMusic from '../../assets/sounds/playing.mp3';
import swapSound from '../../assets/sounds/swap.mp3';

const AudioComponent = ({ isClicked, cardClicked }) => {
  const musicRef = useRef();
  const audioRef = useRef();
  const swapRef = useRef();
  const location = window.location.pathname;

  const isMusicOn = useSelector((state) => state.music.musicOn);
  const isSoundOn = useSelector((state) => state.music.soundOn);
  // const isMusicOn = useSelector((state) => state.musicOn);
  // const isSoundOn = useSelector((state) => state.soundOn);

  const [currentClickSound, setCurrentClickSound] = useState('');
  const [currentMusic, setCurrentMusic] = useState(menuMusic);
  const audio = audioRef.current;
  const swap = swapRef.current;
  const music = musicRef.current;

  const setMusic = () => {
    if (!music) return;
    if (location === '/game') {
      setCurrentMusic(gameMusic);
    } else {
      setCurrentMusic(menuMusic);
    }

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

    if (isClicked && isSoundOn) {
      audio.currentTime = 0;
      audio.play();
    }
    if (cardClicked && isSoundOn) {
      swap.currentTime = 0;
      swap.play();
    }

    setMusic();
  }, [isMusicOn, isSoundOn, currentClickSound, isClicked, cardClicked]);

  return (
    <>
      <audio
        src={currentMusic}
        ref={musicRef}
      />
      <audio
        src={currentClickSound}
        ref={audioRef}
      />
      <audio
        src={swapSound}
        ref={swapRef}
      />
    </>
  );
};

AudioComponent.defaultProps = {
  isClicked: false,
  cardClicked: false,
};

AudioComponent.propTypes = {
  isClicked: PropTypes.bool,
  cardClicked: PropTypes.bool,
};

export default AudioComponent;
