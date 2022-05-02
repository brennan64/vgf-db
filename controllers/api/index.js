const router = require("express").Router();
const foodRoutes = require("./foodRoutes");

router.use("/foodLists", foodRoutes);

module.exports = router;
