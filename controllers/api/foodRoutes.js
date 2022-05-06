const router = require("express").Router();
const res = require("express/lib/response");
const { Food, Category } = require("../../models");

// GET all foods
router.get("/", async (req, res) => {
  const foodData = await Food.findAll({}).catch((err) => {
    res.json(err);
  });
  console.log(foodData);
  const food = foodData.map((dish_name) => dish_name.get({ plain: true }));
  res.render("food", { food });
});
//create new food
router.post("/makepost", async (req, res) => {
  try {
    const foodData = await Food.create({
      ...req.body,
      dish_name: req.body.dish_name,
      dish_game: req.body.dish_game,
      dish_type: req.body.dish_type,
    });
    console.log(foodData);

    res.status(200).json(foodData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
