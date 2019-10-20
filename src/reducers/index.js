import { combineReducers } from 'redux';
import RateQuoteReducer from './RateQuoteReducer';



const rootReducer = combineReducers({
  quotes: RateQuoteReducer,

});

export default rootReducer;
