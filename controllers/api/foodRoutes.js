const router = require("express").Router();
const Food = require("../../models/Food");

// GET all foods
router.get("/", async (req, res) => {
  const foodData = await Food.findAll().catch((err) => {
    res.json(err);
  });
  // console.log(foodData);
  const foods = foodData.map((dish) => dish.get({ plain: true }));
  res.render("homepage", { foods });
});

router.post("/", async (req, res) => {
  try {
    const foodData = await Food.create({
      dish_name: req.body.dish_name,
      dish_game: req.body.dish_game,
      dish_type: req.dish_type,
    });
    res.status(200).json(foodData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
