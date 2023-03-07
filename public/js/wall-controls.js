function toggleWallRed() {
    socket.emit('toggleWallRed');
}

function toggleWallBlue() {
    socket.emit('toggleWallBlue');
}

function rotateWallGreen() {
    socket.emit('rotateWallGreen');
}