const router = require("express").Router();
const Food = require("../../models/Food");

// GET all foods
router.get("/", async (req, res) => {
  try {
    const foodData = awafood.findAll({});
    // console.log(studentData);
    const plainFoodData = foodData.map((food) => food.get({ plain: true }));
    res.render("homepage", { Food: foodData });
  } catch (err) {
    res.status(500).json(err);
  }
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
