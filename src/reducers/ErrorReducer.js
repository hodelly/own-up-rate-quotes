import { ActionTypes } from '../actions';

const initialState = {
  error:false,
};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ERROR:
      return Object.assign({}, state, { status: action.payload });
    default:
      return state;
  }
};

export default ErrorReducer;
