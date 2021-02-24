//dependencies
const multer = require("multer");

//this function makes it so only images can be passed into the database
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

//use multer disk Storage engine
let storage = multer.diskStorage({
    //determines folder to store uploaded files
  destination: (req, file, cb) => {
      //may need to change to just /images since public folder is static
    cb(null, __basedir + "/public/images");
  },
  //determines name of file inside destination folder
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-Everyday-Recipes-${file.originalname}`);
  },
});

const uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;