const sgMail = require('@sendgrid/mail');
const validator = require('validator');

// Load User model
const User = require('../models/User');

let errors = {};
errors.msg = '';

sgMail.setApiKey(
  process.env.SENDGRID_API_KEY ||
    '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'
);

/**
 *  Send the invite friend email to the friend's email address
 *
 * @param {*} email
 * @returns
 */
async function sendSgMail(toEmail, userId, username, fromEmail) {
  if (validator.isEmail(toEmail)) {
    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      subject: username + ' invite you to join our app',
      text: 'Join our app and start chat with ' + username,
      html: `<a>http://example.com/invited/${userId}</a>`
    });
    return true;
  }
  return false;
}

module.exports = sendSgMail;
