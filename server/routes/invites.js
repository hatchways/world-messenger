// Pull in dependencies
const express = require('express');
const passport = require('passport');
const sendSgMail = require('../controller/invite');

// Load User model
const User = require('../../models/User');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', {session: false});

// Controllers to be used
const ConversationController = require('../controller/conversation');

// TODO fix inviting route
const inviteRouter = express.Router();
inviteRouter.post(
    '/email',
    requireAuth,
    (req, res) => {
        User.findById(req.user.id).then(user => {
            return sendSgMail(req.body.toEmail, user.id, user.username, user.email);
        });
    }
);

module.exports = inviteRoutes;
