// Dependencies
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load User model
const User = require("../models/User");

exports.createUser = function (req, res) {
    // Form validation
    const {errors, isValid} = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
        $or: [
            {email: req.body.email},
            {username: req.body.username}
        ]
    }).then(user => {
        if (user) {
            return res.status(400).json({msg: "E-mail address or username already exists"});
        } else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                profile: {
                    language: req.body.language
                }
            });

            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
};

exports.loginUser = function (req, res) {
    // Form validation
    const {errors, isValid} = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Find user by email
    User.findOne({email: req.body.email}).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({msg: "E-mail address not found"});
        }

        // Check password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    username: user.username
                };

                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token,
                            username: user.username
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({msg: "Incorrect password"});
            }
        });
    });
};
