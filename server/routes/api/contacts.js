// Pull in dependencies
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
require("../../config/passport")(passport);

// Load User model
const User = require("../../models/User");
const Contact = require("../../models/Contact");

// @route POST api/contacts/request
// @desc Register user
// @access Public
router.post("/request", passport.authenticate('jwt', {session: false}), async (req, res) => {

    //TODO fix queries
    //Get requester and recipient
    const Requester = User.findById(req.user.id);
    const Recipient = await User.findOne({email: req.body.email});

    //Make contacts
    const docRequester = await Contact.findOneAndUpdate(
        {requester: Requester, recipient: Recipient},
        {$set: {status: 1}},
        {upsert: true, new: true}
    );
    const docRecipient = await Contact.findOneAndUpdate(
        {recipient: Requester, requester: Recipient},
        {$set: {status: 2}},
        {upsert: true, new: true}
    );
    const updateRequester = await User.findOneAndUpdate(
        {_id: Requester},
        {$push: {friends: docRequester._id}}
    );
    const updateRecipient = await User.findOneAndUpdate(
        {_id: Recipient},
        {$push: {friends: docRecipient._id}}
    );
});

// @route POST api/contacts/accept
// @desc Register user
// @access Public
router.post("/accept", passport.authenticate('jwt', {session: false}), (req, res) => {

    //Get requester and recipient
    const Requester = User.findById(req.user.id)
        .then((user) => {
            if (!user) {
                return res.sendStatus(400);
            }
        });
    const Recipient = User.findOne({email: req.body.email})
        .then((user) => {
            if (!user) {
                return res.sendStatus(400);
            }
        });

    Contact.findOneAndUpdate(
        { requester: Requester, recipient: Recipient },
        { $set: { status: 3 }}
    );
    Contact.findOneAndUpdate(
        { recipient: Requester, requester: Recipient },
        { $set: { status: 3 }}
    );
});

module.exports = router;
