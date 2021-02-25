import { SET_LEVEL, FINISH_GAME } from '../constants';

const gameState = {
  level: 0,
  gameOver: false,
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
    default: return state;
  }
};

export default gameReducer;
