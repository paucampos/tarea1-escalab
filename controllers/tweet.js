const Tweet = require('./../models/tweet');

const createTweet = (req, res, next) => {
    const body = req.body;

    let tweet = new Tweet({
        userId: body.userId,
        message: body.message,
    });

    tweet.save((err, tweetSaved) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error in tweet created',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            tweet: tweetSaved
        });
    })
};

module.exports = { createTweet };