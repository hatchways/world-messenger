// Pull in dependencies
const express = require("express");
const router = express.Router();
const passport = require("passport");
require("../../config/passport")(passport);

// Load User model
const User = require("../../models/User");

// @route GET api/profile
// @desc Register user
// @access Public
router.get("/profile", (req, res) => {

    //TODO implement passport middleware

    return User.findById(req.body.id)
        .then((user) => {
            if(!user) {
                return res.sendStatus(400);
            }
            return res.json({ userProfile: user.getProfile() });
        });
});

module.exports = router;
