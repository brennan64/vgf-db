const router = require("express").Router();
const res = require("express/lib/response");
const { Food } = require("../../models");

// GET all foods
router.get("/", async (req, res) => {
  const foodData = await Food.findAll({}).catch((err) => {
    res.json(err);
  });
  console.log(foodData);
<<<<<<< HEAD
  const foods = foodData.map((dish_name) => dish_name.get({ plain: true }));
=======
  const foods = foodData.map((dish) => dish.get({ plain: true }));
>>>>>>> main
  res.render("food", { foods });
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

router.delete("/:id", async (req, res) => {
  try {
    const foodData = await Project.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!foodData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(foodData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
