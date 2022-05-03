const router = require("express").Router();
const foodRoutes = require("./foodRoutes");
const userRoutes = require("./userRoutes");

router.use("/user", userRoutes);
router.use("/foodLists", foodRoutes);

module.exports = router;
