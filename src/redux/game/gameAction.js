import { SET_LEVEL, FINISH_GAME, SET_SCORE } from '../constants';

const setLevel = () => ({
  type: SET_LEVEL,
});

const setScore = (score = 0) => ({
  type: SET_SCORE,
  payload: score,
});

const finishGame = () => ({
  type: FINISH_GAME,
});

export { setLevel, finishGame, setScore };
