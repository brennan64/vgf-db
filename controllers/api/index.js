const router = require("express").Router();
const foodRoutes = require("./foodRoutes");

router.use("/foodRoutes", foodRoutes);

module.exports = router;
