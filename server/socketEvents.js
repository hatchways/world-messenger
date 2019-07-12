exports = module.exports = function (io) {
    // Set socket.io listeners.
    io.on('connection', (socket) => {
        console.log('a user connected: ' + socket.id);

        socket.on('new message', (msgObject) => {

            const reply = new Message({
                conversationId: msgObject.conversationId,
                body: msgObject.msg,
                author: msgObject.userid
            });

            reply.save((err, sentReply) => {
                if (err) {
                    return next(err);
                }
            });
            io.sockets.emit('refresh message', msgObject.conversationId);
        });

        socket.on('disconnect', () => {
            console.log('user disconnected: ' + socket.id);
        });
    });
};
