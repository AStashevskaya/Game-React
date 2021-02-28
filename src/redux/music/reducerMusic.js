/* eslint-disable no-console */
import { TOGGLE_MUSIC, TOGGLE_SOUND } from '../constants';

// const musicState = {
//   musicOn: false,
//   soundOn: true,
// };

const isMusicOn = localStorage.getItem('musicOn') === null ? false : JSON.parse(localStorage.getItem('musicOn'));
const isSoundOn = localStorage.getItem('soundOn') === null ? true : JSON.parse(localStorage.getItem('soundOn'));
console.log('isMusic', localStorage.getItem('musicOn') === null);
console.log('isSound', localStorage.getItem('soundOn') === null);
console.log(isMusicOn, isSoundOn);
console.log(localStorage.getItem('musicOn'), localStorage.getItem('soundOn'));
const musicState = {
  musicOn: isMusicOn,
  soundOn: isSoundOn,
};

console.log(musicState);

// eslint-disable-next-line no-unused-vars
const musicReducer = (state = musicState, action) => {
  switch (action.type) {
    case TOGGLE_MUSIC:
      localStorage.setItem(' musicOn', JSON.stringify(!state.musicOn));
      return {
        ...state,
        musicOn: !state.musicOn,
      };
    case TOGGLE_SOUND:
      localStorage.setItem(' musicOn', JSON.stringify(!state.soundOn));
      return {
        ...state,
        soundOn: !state.soundOn,
      };
    default: return state;
  }
};

// export default musicReducer;
export default musicState;
