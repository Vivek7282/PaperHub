const express = require("express");
const Question = require("../models/Question");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/pdf",
  ];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });
app.use(express.urlencoded({ extended: true }));
// Serve uploaded photos
app.use("/uploads", express.static("uploads"));

router.route("/addPaper").post(upload.single("question"), async (req, res) => {
  const college = req.body.college;
  const semester = req.body.semester;
  const type = req.body.type;
  const branch = req.body.branch;
  const subject = req.body.subject;
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const question = req.file.filename;

  console.log(college);

  try {
    const newQuestionData = {
      college,
      branch,
      semester,
      type,
      subject,
      question,
    };

    const newQuestion = new Question(newQuestionData);

    await newQuestion.save();
    res.json("Question Added");
  } catch (error) {
    console.error(error);
    res.status(400).json("Error: " + error.message);
  }
});

module.exports = router;
