const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Chapter = require('../models/chapter.model');

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
    const savedAudioPath = `/public/${req.file.filename}`;

    const audioInfo = {
      language: languageCode,
      isCompleted: isCompleted == 'true' ? true : false,
      isPublished: isPublished == 'true' ? true : false,
      audio: savedAudioPath,
    };

    const existingChapter = await Chapter.findById(chapterId);

    // Check if the audio for the language is existed
    const audioForExistingChapter = existingChapter.audio;
    const isExistingAudio = audioForExistingChapter.some(
      (audio) => audio.language == languageCode,
    );
    if (isExistingAudio) {
      // If the audio exists, update it
      await Chapter.updateOne(
        { _id: chapterId, 'audio.language': languageCode }, // Find the chapter and audio entry by language
        { $set: { 'audio.$': audioInfo, updatedAt: Date.now() } }, // Update the audio and set the updatedAt timestamp
      );
    } else {
      // If the audio doesn't exist, add the new audio
      await Chapter.updateOne(
        { _id: chapterId },
        { $push: { audio: audioInfo }, updatedAt: Date.now() }, // Add new audio entry and set updatedAt timestamp
      );
    }

    return res.status(200).json({
      message: 'Audio uploaded successfully',
      filePath: req.file.path,
    });
  });
};
