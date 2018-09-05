import { combineReducers } from 'redux';
import UserReducers from './User/user.reducers';

export default combineReducers({
  user: UserReducers
});