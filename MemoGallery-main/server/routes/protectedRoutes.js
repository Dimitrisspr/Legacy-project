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
router.put("/likes/:id", like);
router.delete("/delete/:id", deletePhoto)
router.delete("/delete", authorize, deleteAll)

module.exports = router;
