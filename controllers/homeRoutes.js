const router = require("express").Router();

router.get("/food", async (req, res) => {
  res.render("food");
});

router.get("/home", async (req, res) => {
  res.render("homepage");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
