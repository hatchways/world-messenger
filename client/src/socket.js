import io from 'socket.io-client';

// Connect to socket.io server
export default function () {
    const socket = io.connect('http://localhost:5000/socket.io');

    function registerListener(cb) {
        //TODO update message states
        socket.on('refresh message', function (err, conversation) {
            //write something to use the conversation information
            console.log(err);
        });
    }

    socket.on('error', function (err) {
        console.log('received socket error:');
        console.log(err)
    });

    function message(conversationid, msg, userid, cb) {
        socket.emit('new message', { conversationId: conversationid, message: msg, userid: userid }, cb)
    }

    return {
        registerListener,
        message
    }
}
