const express = require("express");
// const authController = require("../controllers/authController");
const guideController = require("../controllers/guideController");
const reviewRoutes = require("./reviewRoutes");

const router = express.Router();

// router.use(authController.protect);
// nested route
router.use("/:guideId/reviews", reviewRoutes);
router
  .route("/")
  .get(guideController.getAllGuide)
  .post(guideController.createGuide);

router.get("/:id", guideController.getGuide);

// router
//   .route("/:id")
//   .get(guideController.getBlog)
//   .patch(guideController.updateBlog)
//   .delete(guideController.deleteBlog);

module.exports = router;
