// Dependencies
const fs = require("fs");
const User = require("../models/User");

// User Routes
exports.getUserProfile = function (req, res) {
    return User.findById(req.user.id)
        .then((user) => {
            if (!user) {
                return res.sendStatus(400);
            }
            return res.json({user: {profile: user.getProfile()}});
        });
};

exports.updateUserProfile = function (req, res) {
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
};

exports.getUserProfileImage = function (req, res) {
    User.findById(req.user.id)
        .then((user) => {
                if (!user) {
                    return res.status(404).json({msg: "User not found"});
                }
                res.send(user.profile.image);
            }
        );
};

exports.updateUserProfileImage = function (req, res) {
    User.findById(req.user.id)
        .then((user) => {
                if (!user) {
                    return res.status(404).json({msg: "User not found"});
                }
                user.profile.image = {
                    data: fs.readFileSync(req.file.path),
                    contentType: req.file.mimetype
                };
                user.save();
                res.json({message: 'Profile image was updated'});
            }
        );
};
