const express = require("express");
const projectController = require("../controllers/projectController");
const reviewRoutes = require("./reviewRoutes");

const router = express.Router();

// nested route
router.use("/:placeId/reviews", reviewRoutes);

router
  .route("/")
  .get(projectController.getAllProjects)
  .post(projectController.createProject);

router
  .route("/:id")
  .get(projectController.getProject)
  .patch(projectController.updateProject)
  .delete(projectController.deleteProject);

module.exports = router;
