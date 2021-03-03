import { combineReducers } from 'redux';
import musicReducer from './music/reducerMusic';
import fieldState from './field/fieldReducer';
import { CHANGE_SIZE } from './constants';
import gameReducer from './game/gameReducer';
// import musicReducer from './music/reducerMusic';
// import fieldReducer from './field/fieldReducer';

// const musicReducer = (state = musicState, action) => {
//   switch (action.type) {
//     case TOGGLE_MUSIC:
//       return {
//         ...state,
//         musicOn: !state.musicOn,
//       };
//     case TOGGLE_SOUND:
//       return {
//         ...state,
//         soundOn: !state.soundOn,
//       };
//     default: return state;
//   }
// };

const fieldReducer = (state = fieldState, action) => {
  switch (action.type) {
    case CHANGE_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    default: return state;
  }
};

const rootReducer = combineReducers({
  music: musicReducer,
  field: fieldReducer,
  game: gameReducer,
});

export default rootReducer;
