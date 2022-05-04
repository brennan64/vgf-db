const router = require("express").Router();
const foodRoutes = require("./foodRoutes");
const userRoutes = require("./userRoutes.js");
const categoryRoutes = require("./categoryRoutes");

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
