const User = require("../models/user");

const createUser = (req, res, next) => {
    const body = req.body;

    let user = new User({
        names: body.names,
        surnames: body.surnames,
        birthdate: body.birthdate,
        email: body.email,
        password: body.password,
        avatar: body.avatar,
        banner: body.banner,
        biography: body.biography,
        location: body.location,
        website: body.website
    });

    user.save((err, userSaved) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error in user created',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            user: userSaved
        });
    })
};

const listUser = (req, res, next) => {
    User.find({}, 'names email')
        .exec(
            (err, users) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error users',
                        errors: err
                    });
                }

                res.status(200).json({
                    ok: true,
                    users: users
                });
            }
        )
};

module.exports = { createUser, listUser };