import Config from '../config';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  emailVerified: { type: Boolean, default: false },
  blocked: { type: Boolean, default: false },
  loginAt: { type: Number, default: Date.now() },
  createdAt: { type: Number, default: Date.now() },
  settings: {
    textSize: { type: Number, default: Config.DEFAULT_TEXT_SIZE },
    theme: { type: String, default: Config.THEME.DEFAULT },
    startAyasOnNewLine: { type: Boolean, default: false },
    showAyasNumbers: { type: Boolean, default: true },
    ayasNumberDisplayFormat: { type: String, default: Config.AYA_NUMBER_FORMAT.BEFORE },
    showQuranReferences: { type: Boolean, default: true },
    displayType: { type: String, default: Config.DISPLAY_TYPE.SPLIT_PANEL },
    referenceLanguage: { type: String, default: Config.REFERENCE_LANGUAGE.ARABIC },
    readingLanguage: { type: String, default: Config.READING_LANGUAGE.TAGALOG },
    readingControls: { type: String, default: Config.READING_CONTROLS_TYPE.LEFT_HANDED },
    pageControl: { type: String, default: Config.PAGES_CONTROLS_TYPE.RIGTH_TO_LEFT },
  },
  soundSettings: {
    volumn: { type: Number, default: 0 },
    autoScrollText: { type: Boolean, default: true },
    language: { type: String, default: Config.SOUND_LANGUAGE.ORIGINAL },
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
 