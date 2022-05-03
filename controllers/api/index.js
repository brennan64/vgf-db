const router = require("express").Router();
const foodRoutes = require("./foodRoutes");
router.use("/userRoutes", userRoutes);
router.use("/foodLists", foodRoutes);

module.exports = router;
