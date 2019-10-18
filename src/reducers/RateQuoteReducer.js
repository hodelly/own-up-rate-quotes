import { ActionTypes } from '../actions';

const initialState = {
  all: [],
};

const RateQuoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_RATEQUOTES:
      return Object.assign({}, state, { all: action.payload });
    default:
      return state;
  }
};

export default RateQuoteReducer;
