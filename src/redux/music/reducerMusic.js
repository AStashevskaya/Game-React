import { TOGGLE_MUSIC, TOGGLE_SOUND } from '../constants';

const initialState = {
  musicOn: false,
  soundOn: true,
};

const musicReducer = (state = initialState, action) => {
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

export default musicReducer;
