const router = require("express").Router();

router.get("/myprofile", async (req, res) => {
  res.render("profile");
});

router.get("/makepost", async (req, res) => {
  res.render("makepost");
});

router.get("/categories", async (req, res) => {
  res.render("categories");
});

router.get("/landing", async (req, res) => {
  res.render("landing");
});

router.get("/food", async (req, res) => {
  res.render("food");
});

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
