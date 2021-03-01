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

  const [currentMusic, setCurrentMusic] = useState(menuMusic);
  const music = musicRef.current;

  const setMusic = () => {
    if (!music) return;
    console.log(location, 'from music');

    if (location === '/game') {
      setCurrentMusic(gameMusic);
    } else if (location === '/game-over') {
      console.log(location, '/game-over');
      setCurrentMusic(gameOverMusic);
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
    setMusic();
  }, [isMusicOn, location, currentMusic]);

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
  // isClicked: false,
  // cardClicked: false,
  location: '/',
};

AudioComponent.propTypes = {
  location: PropTypes.string,
  // isClicked: PropTypes.bool,
  // cardClicked: PropTypes.bool,
};

export default AudioComponent;
