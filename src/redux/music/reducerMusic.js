import { TOGGLE_MUSIC, TOGGLE_SOUND } from '../constants';

const musicState = {
  musicOn: false,
  soundOn: true,
};

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
    default: return state;
  }
};

console.log(musicReducer);

// export default musicReducer;
export default musicState;
