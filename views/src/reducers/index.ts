import { combineReducers } from 'redux';
import user from './users';

const applicationReducers = {
  user,
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}
