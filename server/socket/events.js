const User = require('../models/User');
const Message = require('../models/Message');

exports = module.exports = function (io) {
    // Set socket.io listeners.
    io.on('connection', (socket) => {
        console.log('a user connected: ' + socket.id);

        socket.on('new message', (msgObject) => {

            User.findOne({username: msgObject.username}, (err, res) => {
                if (err) {
                    console.log(err)
                }

                const reply = new Message({
                    conversationId: msgObject.conversationId,
                    body: msgObject.message,
                    author: res.id
                });

                reply.save().then(() => {
                    Message.find({conversationId: msgObject.conversationId})
                        .select('createdAt body author')
                        .sort('createdAt')
                        .limit(10)
                        .populate('author', 'username')
                        .exec((err, messages) => {
                            if (err) {
                                return console.log(err);
                            }

                            // TODO implement translated message here
                            // translate(msgObject.message, {to: res.language}).then(res => {
                            //     messages.translate = res.text;
                            // }).catch(err => {
                            //     console.error(err);
                            // });

                            return io.sockets.emit('refresh message', {conversation: messages});
                        });
                });
            });
        });

        socket.on('disconnect', () => {
            console.log('user disconnected: ' + socket.id);
        });
    });
};
