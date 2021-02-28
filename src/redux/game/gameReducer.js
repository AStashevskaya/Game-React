import { SET_LEVEL, FINISH_GAME, SET_SCORE } from '../constants';

const gameState = {
  level: 0,
  gameOver: false,
  score: 0,
};

const gameReducer = (state = gameState, action) => {
  switch (action.type) {
    case SET_LEVEL:
      return {
        ...state,
        level: state.level + 1,
      };
    case FINISH_GAME:
      return {
        ...state,
        gameOver: !state.gameOver,
      };

    case SET_SCORE: {
      console.log(action.payload);
      return {
        ...state,
        score: action.payload,
      };
    }
    default: return state;
  }
};

export default gameReducer;
