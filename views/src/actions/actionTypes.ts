import users from './users';
import books from './books';
import translators from './translators';

export default {
  ...users,
  ...books,
  ...translators,
};
