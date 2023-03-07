const express   = require('express');
const app       = express();
const http      = require('http');
const server    = require('http').createServer(app);
const io        = require('socket.io')(server);

const LISTEN_PORT   = 8080;

server.listen(LISTEN_PORT);
app.use(express.static(__dirname + '/public'));
console.log("Listening on port: " + LISTEN_PORT);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log(socket.id + " is connected");

    socket.on('disconnect', () => {
        console.log(socket.id + " disconnected");
    });

    socket.on('enterBox', (data) =>{
        socket.broadcast.emit('enter-box-2D', data);
    });
    socket.on('leaveBox', (data) =>{
        socket.broadcast.emit('leave-box-2D', data);
    });

    socket.on('toggleWallRed', () => {
        socket.emit('redSuccess');
        socket.broadcast.emit('toggleWallRed');
    });

    socket.on('toggleWallBlue', () => {
        socket.emit('blueSuccess');
        socket.broadcast.emit('toggleWallBlue');
    });

    socket.on('rotateWallGreen', () => {
        socket.broadcast.emit('rotateWallGreen');
    });
});