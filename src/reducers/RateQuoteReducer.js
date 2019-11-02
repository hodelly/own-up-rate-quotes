import { ActionTypes } from '../actions';

const initialState = {
  rateQuotes: [],
  next: {},

};

const RateQuoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_RATEQUOTES:
      return Object.assign({}, state, { rateQuotes: [...state.rateQuotes, ...action.payload.rateQuotes], next: action.payload.next });
    case ActionTypes.CLEAR_RATEQUOTES:
      return Object.assign({}, state, { rateQuotes: [] });

    default:
      return state;
  }
};

export default RateQuoteReducer;
