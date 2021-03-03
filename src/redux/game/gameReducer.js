import { TOGGLE_LANGUAGE } from '../constants';

const language = localStorage.getItem('language') === null ? 'en' : JSON.parse(localStorage.getItem('language'));
const gameState = {
  language,
};

const gameReducer = (state = gameState, action) => {
  switch (action.type) {
    case TOGGLE_LANGUAGE:
      return {
        ...state,
        language: state.language === 'en' ? 'ru' : 'en',
      };
    default: return state;
  }
};

export default gameReducer;
