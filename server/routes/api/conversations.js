// Pull in dependencies
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
require("../../config/passport")(passport);

const Conversation = require('../../models/Conversation');
const Message = require('../../models/Message');
const User = require('../../models/User');

const requireAuth = passport.authenticate('jwt', { session: false });

// @route GET api/conversations/
// @desc get user conversation based on users
// @access Public
router.get("/", requireAuth, (req, res) => {
    // Only return one message from each conversation to display as snippet
    Conversation.find({ participants: req.user.id })
        .select('_id')
        .exec(function(err, conversations) {
            if (err) {
                res.send({ error: err });
                return next(err);
            }

            // Set up empty array to hold conversations + most recent message
            let fullConversations = [];
            conversations.forEach(function(conversation) {
                Message.find({ 'conversationId': conversation._id })
                    .sort('-createdAt')
                    .limit(1)
                    .populate('author', 'username')
                    .exec(function(err, message) {
                        if (err) {
                            res.send({ error: err });
                            return next(err);
                        }
                        fullConversations.push(message);
                        if(fullConversations.length === conversations.length) {
                            return res.status(200).json({ conversations: fullConversations });
                        }
                    });
            });
        });
});


// @route GET api/conversations/conversation
// @desc get user conversation based on users
// @access Public
router.get("/conversation/", requireAuth, (req, res) => {

    Message.find({ conversationId: req.body.conversationId })
        .select('createdAt body author')
        .sort('-createdAt')
        .populate('author', 'username')
        .exec((err, messages) => {
            if (err) {
                res.send({ error: err });
                return next(err);
            }

            return res.status(200).json({ conversation: messages });
        });
});

// @route POST api/conversations/conversation
// @desc create a new message into database
// @access Public
router.post("/conversation/", requireAuth, function (req, res, next) {
    const reply = new Message({
        conversationId: req.body.conversationId,
        body: req.body.composedMessage,
        author: req.user.id
    });

    reply.save((err, sentReply) => {
        if (err) {
            res.send({ error: err });
            return next(err);
        }

        return res.status(200).json({ message: 'Reply successfully sent!' });
    });
});

// @route POST api/conversations/new/
// @desc create a new conversation
// @access Public
router.post('/new/', requireAuth, function (req, res, next) {
    if (!req.body.recipient) {
        res.status(422).send({ error: 'Please choose a valid recipient for your message.' });
        return next();
    }

    if (!req.body.composedMessage) {
        res.status(422).send({ error: 'Please enter a message.' });
        return next();
    }
    console.log(req.user.id);
    const conversation = new Conversation({
        participants: [req.user.id, req.body.recipient]
    });
    conversation.save((err, newConversation) => {
        if (err) {
            res.send({ error: err });
            return next(err);
        }
        const message = new Message({
            conversationId: newConversation._id,
            body: req.body.composedMessage,
            author: req.user.id
        });
        message.save((err, newMessage) => {
            if (err) {
                res.send({ error: err });
                return next(err);
            }
            return res.status(200).json({ message: 'Conversation started!', conversationId: conversation._id });
        });
    });
});

module.exports = router;
