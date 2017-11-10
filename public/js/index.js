var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createEmail', {
        to: 'jen@example.com',
        text: 'Hey. This is Jen',
    });
});
socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newEmail', function (email) {
    console.log('New email', email);
});
