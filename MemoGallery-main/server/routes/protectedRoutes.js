const express = require("express");
const router = express.Router();
const authorize = require("../authorize")

const {
  postPhotos,
  like,
  getPhotos,
  deleteAll,
  deletePhoto
} = require("../controllers/photosControllers");

router.post("/postPhotos", authorize, postPhotos);
router.get("/getPhotos", getPhotos);
router.put("/likes/:id",authorize, like);
router.delete("/deleteAll/", deleteAll)
router.delete("/delete/:id", deletePhoto)
<<<<<<< HEAD
router.delete("/delete", deleteAll)
=======
>>>>>>> 8519a8a2c7982202c9ecd4a9ce0e6e8d41499285

module.exports = router;
