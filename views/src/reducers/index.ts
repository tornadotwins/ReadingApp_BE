import { combineReducers } from 'redux';
import user from './users';
import book from './books';
import translator from './translators';

const applicationReducers = {
  user,
  book,
  translator,
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}
