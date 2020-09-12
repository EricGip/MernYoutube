const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  uploader: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    maxlength: 50,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  privacy: {
    type: Number,
    default: 0,
  },
  filePath: {
      type: String,
  },
  views: {
    type: Number,
    default: 0
  },
  duration: {
    type: String,
  },
  thumbnail: {
      type: String,
  },
  subscribers: [],
  subscribing: []
});

module.exports = mongoose.model("Video", videoSchema);
