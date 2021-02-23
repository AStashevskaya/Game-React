import { combineReducers } from 'redux';

import musicReducer from './music/reducerMusic';
import fieldReducer from './field/fieldReducer';

const rootReducer = combineReducers({
  music: musicReducer,
  field: fieldReducer,
});

export default rootReducer;
