import { ActionTypes } from '../actions';

const initialState = {
  status:false,
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return Object.assign({}, state, { status: action.payload });
    default:
      return state;
  }
};

export default LoadingReducer;
