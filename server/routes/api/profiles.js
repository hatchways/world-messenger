// Pull in dependencies
const express = require("express");
const router = express.Router();
const passport = require("passport");
require("../../config/passport")(passport);

// Load User model
const User = require("../../models/User");

//TODO implement passport middleware

// @route GET api/profile
// @desc get user profile
// @access Public
router.get("/profile", (req, res) => {
    return User.findById(req.body.id)
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
router.post("/profile", (req, res) => {
    User.findByIdAndUpdate(req.body.id)
        .then( (user) => {
            if(!user) {
                return res.status(404).json({ msg: "User not found" });
            }
            console.log(req.body);
            user.profile.firstName = req.body.firstName;
            user.profile.lastName = req.body.lastName;
            user.save();
            return res.status(200).json({ msg: "Profile updated"});

        })
});

module.exports = router;
