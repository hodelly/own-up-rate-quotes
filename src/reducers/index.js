import { combineReducers } from 'redux';
import RateQuoteReducer from './RateQuoteReducer';
import LoadingReducer from './LoadingReducer';


const rootReducer = combineReducers({
  quotes: RateQuoteReducer,
  loading: LoadingReducer,

});

export default rootReducer;
