// import { CHANGE_SIZE } from '../constants';

const size = localStorage.getItem('size') === null ? 18 : JSON.parse(localStorage.getItem('size'));

const fieldState = {
  size,
};

export default fieldState;
