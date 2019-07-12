import io from 'socket.io-client';

// Connect to socket.io server
export default function () {
    const socket = io.connect('http://localhost:5000');

    function registerListener(cb) {
        socket.on('refresh message', function (conversation) {
            cb(conversation);
        });
    }

    socket.on('error', function (err) {
        console.log('received socket error:');
        console.log(err)
    });

    function sendMessage(conversationId, message, username, cb) {
        socket.emit('new message', { conversationId, message, username }, cb)
    }

    return {
        registerListener,
        sendMessage
    }
}