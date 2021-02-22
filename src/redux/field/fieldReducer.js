import { CHANGE_SIZE } from '../constants';

const initialState = {
  size: 16,
};

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    default: return state;
  }
};

export default fieldReducer;
