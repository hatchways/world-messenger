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
// @desc get list of conversationIds for current user
// @access Public
router.get("/", requireAuth, (req, res) => {
    // Only return one message from each conversation to display as snippet
    Conversation.find({ participants: req.user.id })
        .select('_id')
        .populate('participants', 'username')
        .exec(function(err, conversations) {
            if (err) {
                res.send({ error: err });
                return next(err);
            }
            return res.status(200).json({conversations: conversations});
        });
});


// @route GET api/conversations/conversation
// @desc get list of messages for a given conversation
// @access Public
router.get("/conversation/:conversationId", requireAuth, (req, res) => {

    Message.find({ conversationId: req.params.conversationId })
        .select('createdAt body author')
        .sort('createdAt')
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

    User.findOne({username: req.body.recipient}, (error, userRec) => {
        if (error) {
            return console.log(`Error has occurred: ${error}`);
        }
        const conversation = new Conversation({
            participants: [req.user.id, userRec.id]
        });
        conversation.save((err, newConversation) => {
            if (err) {
                res.send({ error: err });
                return next(err);
            }
            return res.status(200).json({ message: 'Conversation started!', conversationId: newConversation._id });
        });
    });

});

module.exports = router;
