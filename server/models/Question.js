const mongoose = require("mongoose");

const { Schema } = mongoose;

const PaperSchema = new Schema({
  college: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
  },
});

module.exports = mongoose.model("paper", PaperSchema);
