// Pull in dependencies
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
require("../../config/passport")(passport);

// Load User model
const User = require("../../models/User");

// @route GET api/profile
// @desc get user profile
// @access Public
router.get("/profile", passport.authenticate('jwt', {session: false}), (req, res) => {
    return User.findById(req.user.id)
        .then((user) => {
            if(!user) {
                return res.sendStatus(400);
            }
            return res.json({ user: {profile: user.getProfile()}});
        });
});

// @route POST api/profile
// @desc Register user
// @access Public
router.post("/profile", passport.authenticate('jwt', {session: false}), (req, res) => {
    User.findByIdAndUpdate(req.user.id)
        .then( (user) => {
            if(!user) {
                return res.status(404).json({ msg: "User not found" });
            }
            user.profile.firstName = req.body.firstName;
            user.profile.lastName = req.body.lastName;
            user.save();
            return res.status(200).json({ msg: "Profile updated"});

        })
});

module.exports = router;
