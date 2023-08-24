const router = require("express").Router();
const userRoutes = require("./userRoutes");
const gameRoutes = require("./gameRoutes");
const bugRoutes = require("./bugRoutes");

router.use("/bugs", bugRoutes);
router.use("/games", gameRoutes);
router.use("/users", userRoutes)

module.exports = router;