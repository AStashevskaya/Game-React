import { CHANGE_SIZE } from '../constants';

function changeSize(size = 18) {
  return {
    type: CHANGE_SIZE,
    payload: size,
  };
}

export default changeSize;
