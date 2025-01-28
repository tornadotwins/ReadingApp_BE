import { combineReducers } from 'redux';
import user from './users';
import book from './books';
import translator from './translators';
import journeys from './journeys';

const applicationReducers = {
  user,
  book,
  translator,
  journeys,
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}
