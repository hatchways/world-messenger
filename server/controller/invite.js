const sgMail = require('@sendgrid/mail');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const keys = require("../config/keys");

const saltRounds = 10;

// set te sgMail service api key
sgMail.setApiKey(
  process.env.SENDGRID_API_KEY || keys.sgMailAPI);

/**
 * Send the invite friend email to the friend's email address
 *
 * @param {*} toEmail
 * @param {*} userId
 * @param {*} username
 * @param {*} fromEmail
 * @returns true if the email is sent, false if the email is not sent
 */
async function sendSgMail(toEmail, userId, username, fromEmail) {
  if (validator.isEmail(toEmail)) {
    const inviteLink = generateInviteLink(userId);
    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      subject: username + ' invite you to join our app',
      text: 'Join our app and start chat with ' + username,
      html: `<a>${inviteLink}</a>`
    });
    return true;
  }
  return false;
}

/**
 * Generate unique invite link
 *
 * @param {*} userId
 * @returns the unique invite link
 */
function generateInviteLink(userId) {
  const salt = bcrypt.genSalt(saltRounds);
  const hash = bcrypt.hash(userId, salt);
  const inviteLink = 'http://example.com/invited/' + hash;
  return inviteLink;
}

module.exports = {
  generateInviteLink,
  sendSgMail
};
