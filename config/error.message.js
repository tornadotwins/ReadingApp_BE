const ERROR_MESSAGES = {
  EMPTY_BODY: 'Failed! Fields are not exists.',
  SERVER_ERROR: 'Server Error',
  NO_TOKEN: 'No token',

  // Auth
  USERNAME_IN_USE: 'Failed! Username is already in use!',
  EMAIL_IN_USE: 'Failed! Email is already in use!',
  ACCOUNT_CANT_FIND: "Could't find your account.",
  USERNAME_NOT_EXIST: 'Username does not exist.',
  EMAIL_NOT_VERIFIED: 'Your email address could not be verified.',
  ACCOUNT_BLOCKED: 'Your account is blocked.',
  PASSWORD_INCORRECT: 'Your password is incorrect.',
  TOKEN_NOT_VALID: 'Your token is not valid.',
  TOKEN_EXPIRED: 'Token has been expired',

  // Book
  BOOK_NOT_FOUND: "Could't find books in library",
  SUBBOOK_NOT_FOUND: "Could't find subBooks in book",
  CHAPTER_NOT_FOUND: "Couldn't find chapters in sub book",
  VERSE_NOT_FOUND: "Couldn't find verses in chapter",
  USER_HISTORY_NOT_FOUND: "Couldn't find history for this user.",
  HISTORY_ADDED: "History added",
  INCORRECT_PARAMS: "Incorrect parameters",
  BOOKMARK_NOT_FOUND: "Couldn't find bookmark.",
  BOOKMARK_ADDED: "Bookmark added",
  BOOKMARK_DELETE: "Bookmark deleted",

  // Authenticate
  USER_NOT_PERMITTED: "You don't have permission to do this action.",
  USER_NOT_FOUND: "Could't find the user",
};

export default ERROR_MESSAGES;
