import { combineReducers } from 'redux';

import musicReducer from './music/reducerMusic';
// import soundReducer from './sound/soundReducer';

const rootReducer = combineReducers({
  music: musicReducer,
  // sound: soundReducer,
});

export default rootReducer;
