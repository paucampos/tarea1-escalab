const router = require("express").Router();
const { getTweet, getFollowers, createTweet, deleteTweet, tweetById } = require("../controllers/tweet");
const { valuesValidator } = require('../validators');

// Rutas
router.get("/tweets", getTweet);
router.get("/tweets/followers", getFollowers);
router.post("/tweet/create", createTweet, valuesValidator);
router.delete("/tweet/:tweetId", deleteTweet);

// Params
router.param("tweetId", tweetById);

module.exports = router;