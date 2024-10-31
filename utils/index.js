const jwt = require('jsonwebtoken');
const ERROR_MESSAGES = require('../config/error.message');
const CryptoJS = require('crypto-js');

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
exports.getChapterInfos = (bookInfos, language) => {
  let chapterInfos = [];

  bookInfos.forEach((bookInfo) => {
    const strChapterNumber = bookInfo[`Chapter_${language}`];
    const chapterNumber = parseInt(
      strChapterNumber.split(' ')[1],
      10,
    );

    const currentSubBookTitle = bookInfo[`SubBook_${language}`];

    // Check if chapter already exists using some() method
    const chapterExists = chapterInfos.some(
      (chapter) =>
        chapter.subBookTitle === currentSubBookTitle &&
        chapter.chapterNumber === chapterNumber,
    );

    // Only push if chapter doesn't exist
    if (!chapterExists) {
      chapterInfos.push({
        subBookTitle: currentSubBookTitle,
        chapterNumber: chapterNumber,
      });
    }
  });

  return chapterInfos;
};

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Get verses  //////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.groupVersesByChapter = (bookInfos, language) => {
  // First create a map to store grouped data
  const groupedData = new Map();

  bookInfos.forEach((bookInfo) => {
    const subBook = bookInfo[`SubBook_${language}`];
    const strChapterNumber = bookInfo[`Chapter_${language}`];
    const chapterNumber = parseInt(
      strChapterNumber.split(' ')[1],
      10,
    );

    // Create unique key for subBook + chapter combination
    const key = `${subBook}-${chapterNumber}`;

    if (!groupedData.has(key)) {
      groupedData.set(key, {
        subBookTitle: subBook,
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
