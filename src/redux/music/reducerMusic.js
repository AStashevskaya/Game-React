/* eslint-disable no-console */
import {
  TOGGLE_MUSIC, TOGGLE_SOUND,
  TURN_UP_MUSIC, TURN_UP_SOUND, TURN_DOWN_MUSIC, TURN_DOWN_SOUND,
} from '../constants';

// const musicState = {
//   musicOn: false,
//   soundOn: true,
// };

const isMusicOn = localStorage.getItem('musicOn') === null ? false : JSON.parse(localStorage.getItem('musicOn'));
const isSoundOn = localStorage.getItem('soundOn') === null ? true : JSON.parse(localStorage.getItem('soundOn'));
const musicVolume = localStorage.getItem('musicVolume') === null ? 0.5 : JSON.parse(localStorage.getItem('musicVolume'));
const soundVolume = localStorage.getItem('soundVolume') === null ? 0.5 : JSON.parse(localStorage.getItem('soundVolume'));

const musicState = {
  musicOn: isMusicOn,
  soundOn: isSoundOn,
  musicVolume,
  soundVolume,
};

console.log(musicState);

// eslint-disable-next-line no-unused-vars
const musicReducer = (state = musicState, action) => {
  switch (action.type) {
    case TOGGLE_MUSIC:
      return {
        ...state,
        musicOn: !state.musicOn,
      };
    case TOGGLE_SOUND:
      return {
        ...state,
        soundOn: !state.soundOn,
      };

    case TURN_UP_MUSIC:
      return {
        ...state,
        musicVolume: state.musicVolume >= 1 ? 1 : state.musicVolume + 0.1,
      };
    case TURN_DOWN_MUSIC:
      return {
        ...state,
        musicVolume: state.musicVolume <= 0.1 ? 0 : state.musicVolume - 0.1,
      };

    case TURN_UP_SOUND:
      return {
        ...state,
        soundVolume: state.soundVolume >= 1 ? 1 : state.soundVolume + 0.1,
      };
    case TURN_DOWN_SOUND:
      return {
        ...state,
        soundVolume: state.soundVolume <= 0.1 ? 0 : state.soundVolume - 0.1,
      };
    default: return state;
  }
};

export default musicReducer;
// export default musicState;
