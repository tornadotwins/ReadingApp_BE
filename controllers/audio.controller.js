const multer = require('multer');
const path = require('path');
const fs = require('fs');

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
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

// Multer middleware for single file upload
const upload = multer({ storage }).single('file');

exports.uploadAudio = (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).json({ message: 'Failed to upload audio', error: err });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No audio file uploaded' });
    }

    console.log(`Audio uploaded to: ${req.file.path}`);
    return res.status(200).json({
      message: 'Audio uploaded successfully',
      filePath: req.file.path,
    });
  });
};
