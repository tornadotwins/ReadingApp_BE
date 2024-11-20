import { combineReducers } from 'redux';
import user from './users';
import book from './books';

const applicationReducers = {
  user,
  book,
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}
