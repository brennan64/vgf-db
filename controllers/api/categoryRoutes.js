const router = require("express").Router();
const { Category, Food } = require("../../models");

// GET all foods
router.get("/", async (req, res) => {
  const categoryData = await Category.findAll({
    // include: [
    //   {
    //     model: Food,
    //   },
    // ],
  }).catch((err) => {
    res.json(err);
  });
  // console.log(categoryData);
  const foods = categoryData.map((dish_category) =>
    dish_category.get({ plain: true })
  );
  res.render("homepage", { foods });
});

router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create({
      ...req.body,
      dish_cateogry: req.body.dish_cateogry,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
