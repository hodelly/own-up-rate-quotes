import { combineReducers } from 'redux';
import RateQuoteReducer from './RateQuoteReducer';
import LoadingReducer from './LoadingReducer';
import ErrorReducer from './ErrorReducer';



const rootReducer = combineReducers({
  quotes: RateQuoteReducer,
  loading: LoadingReducer,
  error: ErrorReducer,

});

export default rootReducer;
