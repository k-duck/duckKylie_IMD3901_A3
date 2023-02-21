const { Socket } = require('dgram');
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

    //on "walk" send position data. Get walk and position data from a-frame
    //socket.on()
});