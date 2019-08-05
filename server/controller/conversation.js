
// Dependencies
const Conversation = require('../models/Conversation');
const Message = require('../models/Message');
const User = require('../models/User');

exports.getUserConversations = function (req, res) {
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
};

exports.getConversationMessages = function (req, res) {

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
};

exports.createNewConversation = function (req, res, next) {
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
};

exports.createNewMessage = function (req, res, next) {
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
};
