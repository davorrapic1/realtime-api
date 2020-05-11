const http = require('http');
const socketio = require('socket.io');
require('dotenv').config();

const app = require('./app');


var server = http.createServer(app);

const io = socketio(server);


io.on('connection', socket => {
    socket.emit('Welcome')
})


const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`Server started on port ${PORT}`));