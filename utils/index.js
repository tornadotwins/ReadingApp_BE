const jwt = require('jsonwebtoken');
const ERROR_MESSAGES = require('../config/error.message');
const CryptoJS = require('crypto-js');
const { LANGUAGE_CODE, LANGUAGE_CODE_TABLES } = require('../config');

/////////////////////////////////////////////////////////////////////////
////////// Generate Token by payload data and expiresIn  ////////////////
/////////////////////////////////////////////////////////////////////////
exports.generateToken = (payload, expiresIn) => {
  return jwt.sign(
    payload,
    process.env.CRYPTR_KEY ||
      'YTkxOGhcE1MjQtMzJkOMBC00MWJiLTg0NzAtZGZmOYIVHVJHVDI2ZDlhNzRh',
    {
      expiresIn: expiresIn,
    },
  );
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Decode token  //////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.decodeToken = (token) => {
  const decoded = jwt.verify(
    token,
    process.env.CRYPTR_KEY ||
      'YTkxOGhcE1MjQtMzJkOMBC00MWJiLTg0NzAtZGZmOYIVHVJHVDI2ZDlhNzRh',
  );
  return decoded;
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////// Encrypt Password  ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.encrypt = (password) => {
  return CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Utf8.parse(password),
  );
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////// Decrypt Password  ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.decrypt = (decryptedPassword) => {
  return CryptoJS.enc.Base64.parse(decryptedPassword).toString(
    CryptoJS.enc.Utf8,
  );
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Check token  ///////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.checkToken = (req, res, next) => {
  let token =
    req.headers['x-access-token'] || req.headers['authorization'];
  if (!token) {
    return res.status(401).send({
      status: false,
      message: ERROR_MESSAGES.NO_TOKEN,
    });
  }

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  try {
    const decoded = jwt.verify(token, process.env.CRYPTR_KEY);
    if (decoded.id) {
      req.currentUserId = decoded.id;
      next();
    }
    return true;
  } catch (error) {
    return res.status(401).send({
      status: false,
      message: ERROR_MESSAGES.TOKEN_EXPIRED,
    });
  }
};

/////////////////////////////////////////////////////////////////////////
////////////////// Identify Language for creating book  /////////////////
/////////////////////////////////////////////////////////////////////////
exports.getLanguage = (bookInfo) => {
  const keys = Object.keys(bookInfo);
  const language = keys[0].split('_')[1];

  return language;
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Get book title  ////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getBookTitle = (bookInfo, language) => {
  return bookInfo[`Book_${language}`];
};

/////////////////////////////////////////////////////////////////////////
////////////////////////// Get sub book title  //////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getSubBookTitles = (bookInfos, language) => {
  let subBookTitles = [];

  bookInfos.forEach((bookInfo) => {
    const currentSubBookTitle = bookInfo[`SubBook_${language}`];

    if (!subBookTitles.includes(currentSubBookTitle))
      subBookTitles.push(currentSubBookTitle);
  });

  return subBookTitles;
};

/////////////////////////////////////////////////////////////////////////
///////////////////////////// Get chapters  /////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getChapterNumbers = (bookInfos) => {
  let chapterNumbers = [];

  bookInfos.forEach((bookInfo) => {
    const strChapterNumber = bookInfo['Chapter_Number'];
    const chapterNumber = parseInt(strChapterNumber, 10);

    // Check if chapter already exists using some() method
    const chapterExists = chapterNumbers.some(
      (chapter) => chapter == chapterNumber,
    );

    // Only push if chapter doesn't exist
    if (!chapterExists) {
      chapterNumbers.push(chapterNumber);
    }
  });

  return chapterNumbers;
};

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Get verses  //////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.groupVersesByChapter = (
  bookInfos,
  subBookInfos,
  chapterInfos,
  language,
) => {
  // First create a map to store grouped data
  const groupedData = new Map();

  const languageCode = module.exports.getLanguageCode(language);

  bookInfos.forEach((bookInfo) => {
    // Get Sub Book ID
    const subBook = bookInfo[`SubBook_${language}`];
    const subBookInfo = subBookInfos.find(
      (subBookInfo) => subBookInfo.title?.[languageCode] == subBook,
    );
    const subBookId = subBookInfo._id;

    // Get Chapter ID
    const strChapterNumber = bookInfo[`Chapter_${language}`];
    const chapterNumber = parseInt(
      strChapterNumber.split(' ')[1],
      10,
    );

    // Find the chapter info that matches both subBookId and chapterNumber
    const chapterInfo = chapterInfos.find(
      (chapter) =>
        chapter.subBook.toString() === subBookId.toString() &&
        chapter.chapterNumber === chapterNumber,
    );

    // Get the chapter ID
    const chapterId = chapterInfo._id;

    // Create unique key for subBook + chapter combination
    const key = `${subBook}-${chapterNumber}`;

    if (!groupedData.has(key)) {
      groupedData.set(key, {
        subBookTitle: subBook,
        subBookId: subBookId,
        chapterId: chapterId,
        chapterNumber: chapterNumber,
        verses: [],
      });
    }

    // Add verse information
    groupedData.get(key).verses.push({
      verseNumber: bookInfo[`Verse_Number_${language}`],
      verseText: bookInfo[`Verse_${language}`],
    });
  });

  // Convert map to array and sort by subBook and chapter
  return Array.from(groupedData.values()).sort((a, b) => {
    // First sort by subBook
    if (a.subBookTitle < b.subBookTitle) return -1;
    if (a.subBookTitle > b.subBookTitle) return 1;
    // Then sort by chapter number
    return a.chapterNumber - b.chapterNumber;
  });
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////// Get language code  //////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getLanguageCode = (language) => {
  const languageTable = LANGUAGE_CODE_TABLES.find(
    (languageCodeTable) => languageCodeTable.language == language,
  );

  return languageTable.code;
};
