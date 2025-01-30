import users from './users';
import books from './books';
import translators from './translators';
import journeys from './journeys';

export default {
  ...users,
  ...books,
  ...translators,
  ...journeys,
};
