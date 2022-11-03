const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/signInWithGoogle", authController.signInWithGoogle);
router.get("/logout", authController.logout);

router.get("/isLogin", authController.onAuthStateChanged);

module.exports = router;
