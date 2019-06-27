// Pull in dependencies
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../../config/passport')(passport);

const sendSgMail = require('../../controller/invite');

// Load User model
const User = require('../../models/User');

// @route POST api/users/invite/email
// @desc Send the invite email to friend
// @access Public
router.post(
  '/email',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
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

module.exports = router;
