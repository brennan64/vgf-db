const router = require("express").Router();
const { Category, Food } = require("../../models");

// GET all categories
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
  const categories = categoryData.map((dish_category) =>
    dish_category.get({ plain: true })
  );
  res.render("categoryContent", { categories });
});

//create new category
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create({
      ...req.body,
      dish_category: req.body.dish_category,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update
router.put("/categories/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body.dish_category, {
      where: { id },
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
