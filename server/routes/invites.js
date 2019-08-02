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
            const toEmail = req.body.toEmail;
            const userId = user.id;
            const username = user.username;
            const fromEmail = user.email;
            const result = sendSgMail(toEmail, userId, username, fromEmail);
            return result.then(val => {
                if (val) {
                    res.json({ msg: 'Invite email send' });
                } else {
                    res.json({ msg: 'Failed to send invite email' });
                }
            });
        });
    }
);

module.exports = inviteRoutes;
