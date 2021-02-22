import { createStore } from 'redux';
import rootReducer from './rootReducer';
// import musicReducer from './music/reducerMusic';

const store = createStore(rootReducer);
// const store = createStore(rootReducer);

export default store;
