import { SET_LEVEL, FINISH_GAME } from '../constants';

const setLevel = () => ({
  type: SET_LEVEL,
});

const finishGame = () => ({
  type: FINISH_GAME,
});

export { setLevel, finishGame };
