const router = require("express").Router();
const foodRoutes = require("./foodRoutes");
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");

router.use("/user", userRoutes);
router.use("/foodLists", categoryRoutes);

module.exports = router;
