import { combineReducers } from 'redux';
import searchNews from './searchNews';
import topNews from './topNews';

export default combineReducers({
  topNews,
  searchNews,
});
