// Pull in dependencies
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
require("../../config/passport")(passport);
const multer = require('multer');
const upload = multer({storage: storage});

// Sets up where to store POST images
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/')
    }
});

// Load User model
const User = require("../../models/User");

// @route GET api/profiles/profile
// @desc get user profile
// @access Public
router.get("/profile", passport.authenticate('jwt', {session: false}), (req, res) => {
    return User.findById(req.user.id)
        .then((user) => {
            if (!user) {
                return res.sendStatus(400);
            }
            return res.json({user: {profile: user.getProfile()}});
        });
});

// @route POST api/profiles/profile
// @desc Register user
// @access Public
router.post("/profile", passport.authenticate('jwt', {session: false}), (req, res) => {
    User.findByIdAndUpdate(req.user.id)
        .then((user) => {
            if (!user) {
                return res.status(404).json({msg: "User not found"});
            }
            user.profile.firstName = req.body.firstName;
            user.profile.lastName = req.body.lastName;
            user.save();
            return res.status(200).json({msg: "Profile updated"});

        })
});

// @route GET api/profiles/image
// @desc gets profile image
// @access Public
router.get("/image", passport.authenticate('jwt', {session: false}), function (req, res) {
    User.findById(req.user.id)
        .then((user) => {
                if (!user) {
                    return res.status(404).json({msg: "User not found"});
                }
                res.send(user.profile.image);
            }
        );
});

// @route POST api/profiles/image
// @desc upload profile image
// @access Public
router.post("/image", passport.authenticate('jwt', {session: false}), upload.single('file'), function (req, res) {
    User.findById(req.user.id)
        .then((user) => {
                if (!user) {
                    return res.status(404).json({msg: "User not found"});
                }
                user.profile.image.data = fs.readFileSync(req.file.path);
                user.profile.image.contentType = 'image/jpeg';
                user.save();
                res.json({message: 'Profile image was updated'});
            }
        );
});


module.exports = router;
