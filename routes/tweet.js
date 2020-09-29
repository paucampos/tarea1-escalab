const router = require("express").Router();
const { createTweet } = require("../controllers/tweet");

// Rutas
router.post("/create", createTweet);

module.exports = router;