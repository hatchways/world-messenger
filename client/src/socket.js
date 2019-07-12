import io from 'socket.io-client';

// Connect to socket.io server
export default function () {
    const socket = io.connect('http://localhost:5000/socket.io');

    //TODO update message states
    socket.on('refresh message', function (err, conversationId) {
        //write something to update messages using the conversationId
        console.log(err);
    });

    socket.on('error', function (err) {
        console.log('received socket error:');
        console.log(err)
    });

    function message(conversationid, msg, userid, cb) {
        socket.emit('message', { conversationId: conversationid, message: msg, userid: userid }, cb)
    }

    return {
        message
    }
}
