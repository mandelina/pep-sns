const express = require("express");
const router = express.Router();

//경로 :  /auth/login
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
