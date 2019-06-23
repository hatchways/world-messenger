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
    User.findById(req.body.id)
        .then( (user) => {
            if(!user) {
                return res.status(404).json({ msg: "User not found" });
            }
            else {
                user.profile = req.body.profile;
                return res.status(200).json({ msg: "Profile updated"});
            }
        })
});

module.exports = router;
