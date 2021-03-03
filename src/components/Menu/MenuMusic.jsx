/* eslint-disable jsx-a11y/media-has-caption */
// /* eslint-disable jsx-a11y/media-has-caption */
import React, {
  useRef, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import gameMusic from '../../assets/sounds/playing.mp3';
import menuMusic from '../../assets/sounds/menu.mp3';
import gameOverMusic from '../../assets/sounds/game-over.mp3';

const AudioComponent = ({ location }) => {
  const musicRef = useRef();

  const isMusicOn = useSelector((state) => state.music.musicOn);
  const musicVolume = useSelector((state) => state.music.musicVolume);

  const [currentMusic, setCurrentMusic] = useState(menuMusic);
  const music = musicRef.current;

  const setMusic = () => {
    if (!music) return;

    if (location.endsWith('/#game')) {
      setCurrentMusic(gameMusic);
    } else if (location.endsWith('/#game-over')) {
      setCurrentMusic(gameOverMusic);
    } else {
      setCurrentMusic(menuMusic);
    }

    if (isMusicOn) {
      music.play();
      music.loop = true;
      music.volume = musicVolume;
    }

    if (!isMusicOn) music.pause();
  };

  useEffect(() => {
    setMusic();
  }, [isMusicOn, location, currentMusic, musicVolume]);

  return (
    <>
      <audio
        src={currentMusic}
        ref={musicRef}
      />
    </>
  );
};

AudioComponent.defaultProps = {
  location: '/',
};

AudioComponent.propTypes = {
  location: PropTypes.string,
};

export default AudioComponent;
