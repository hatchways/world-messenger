// Pull in dependencies
const express = require("express");
const passport = require("passport");
const multer = require('multer');

// Sets up where to store POST images
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/')
    }
});
const upload = multer({storage: storage});

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
// Controllers to be used
const ProfileController = require('../controller/profile');

// Create profile route
const profileRoutes = express.Router();
profileRoutes.get('/profile', requireAuth, ProfileController.getUserProfile);
profileRoutes.post('/profile', requireAuth, ProfileController.updateUserProfile);
profileRoutes.get('/image', requireAuth, ProfileController.getUserProfileImage);
profileRoutes.post('/image', requireAuth, upload.single('file'), ProfileController.updateUserProfileImage);

module.exports = profileRoutes;
