import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import item from './item';
import location from './location';

const rootReducer = combineReducers({
  user,
  flash,
  item,
  location,
});

export default rootReducer;
