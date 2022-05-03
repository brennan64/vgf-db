const router = require("express").Router();
const Category = require("../../models/category");

// GET all foods
router.get("/", async (req, res) => {
  const categoryData = await Food.findAll().catch((err) => {
    res.json(err);
  });
  // console.log(categoryData);
  const foods = categoryData.map((dish) => dish.get({ plain: true }));
  res.render("homepage", { foods });
});

router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create({
      dish_cateogry: req.body.dish_cateogry,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
