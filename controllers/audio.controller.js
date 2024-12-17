const multer = require('multer');
const path = require('path');
const fs = require('fs');

const Chapter = require('../models/chapter.model');
const Verse = require('../models/verse.model');
const ERROR_MESSAGES = require('../config/error.message');

// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../public/audios');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

// Multer middleware for single file upload
const upload = multer({ storage }).single('file');

/////////////////////////////////////////////////////////////////////////
////////// Upload Audio File and Save it to Chapter collection //////////
/////////////////////////////////////////////////////////////////////////
exports.uploadAudio = (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      console.error('Error uploading file:', err);
      return res
        .status(500)
        .json({ message: 'Failed to upload audio', error: err });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ message: 'No audio file uploaded' });
    }

    const { chapterId, languageCode, isCompleted, isPublished } =
      req.body;

    // Save the audio data to database
    const savedAudioPath = `/audios/${req.file.filename}`;

    const audioInfo = {
      language: languageCode,
      isCompleted: isCompleted == 'true' ? true : false,
      isPublished: isPublished == 'true' ? true : false,
      audio: savedAudioPath,
    };

    const existingChapter = await Chapter.findById(chapterId);

    if (!existingChapter)
      return res
        .status(400)
        .json({ message: ERROR_MESSAGES.CHAPTER_NOT_FOUND });

    // Check if the audio for the language is existed
    const audioForExistingChapter = existingChapter.audio;
    const isExistingAudio = audioForExistingChapter.some(
      (audio) => audio.language == languageCode,
    );

    let newChapter;
    if (isExistingAudio) {
      // If the audio exists, update it
      newChapter = await Chapter.findOneAndUpdate(
        { _id: chapterId, 'audio.language': languageCode }, // Find the chapter and audio entry by language
        { $set: { 'audio.$': audioInfo, updatedAt: Date.now() } }, // Update the audio and set the updatedAt timestamp
        { new: true, runValidators: true },
      );
    } else {
      // If the audio doesn't exist, add the new audio
      newChapter = await Chapter.findOneAndUpdate(
        { _id: chapterId },
        { $push: { audio: audioInfo }, updatedAt: Date.now() }, // Add new audio entry and set updatedAt timestamp
        { new: true, runValidators: true },
      );
    }

    let updatedNewChapter = {
      chapterId: newChapter._id,
      chapterAudio: newChapter.audio,
      chapterNumber: newChapter.chapterNumber,
      chapterTranslated: newChapter.isTranslated,
      chapterIsCompleted: newChapter.isCompleted,
      chapterIsPublished: newChapter.isPublished,
      subBookId: newChapter.subBook,
    };

    const verses = await Verse.find({ chapter: chapterId }).sort({
      number: 1,
    });

    let updatedVerses = [];
    verses.map((verse) => {
      updatedVerses.push({
        verseId: verse._id,
        verseHeader: verse.header,
        verseAudioStart: verse.audioStart,
        verseNumber: verse.number,
        verseText: verse.text,
        verseReference: verse.reference,
      });
    });

    updatedNewChapter = { ...updatedNewChapter, verses: updatedVerses };

    return res.status(200).json(updatedNewChapter);
  });
};

/////////////////////////////////////////////////////////////////////////
//////////////////////// Save Audio mark to verse ///////////////////////
/////////////////////////////////////////////////////////////////////////
exports.saveMarker = async (req, res) => {
  try {
    const { chapterId, languageCode, markerData } = req.body;
    const verses = await Verse.find({ chapter: chapterId }).sort({
      number: 1,
    });

    if (!verses || verses.length === 0) {
      return res
        .status(400)
        .json({ message: ERROR_MESSAGES.CHAPTER_NOT_FOUND });
    }

    // Use Promise.all to wait for all updates to complete
    const updatedVerses = await Promise.all(
      verses.map(async (verse) => {
        let verseAudioStartInfo = verse.audioStart;
        const verseNumber = verse.number;

        const verseMarker = markerData.find(
          (marker) =>
            marker?.['Verse Number'] == verseNumber.toString(),
        );

        verseAudioStartInfo = {
          ...verseAudioStartInfo,
          [languageCode]: verseMarker?.['Marker Time'],
        };

        return Verse.findByIdAndUpdate(
          verse._id,
          {
            audioStart: verseAudioStartInfo,
            updatedAt: Date.now(),
          },
          { new: true, runValidators: true },
        );
      }),
    );

    return res.status(200).json(updatedVerses);
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.NETWORK_ERROR });
  }
};
