const express = require("express");
// const authController = require("../controllers/authController");
const guideController = require("../controllers/guideController");

const router = express.Router();

// router.use(authController.protect);

router
  .route("/")
  .get(guideController.getAllGuide)
  .post(guideController.createGuide);

// router
//   .route("/:id")
//   .get(guideController.getBlog)
//   .patch(guideController.updateBlog)
//   .delete(guideController.deleteBlog);

module.exports = router;
