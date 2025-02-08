const socketIO = require('socket.io');

let io;

exports.init = (server) => {
  io = socketIO(server);
  io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
  return io;
};

exports.getIO = () => {
  if (!io) throw new Error('Socket.io not initialized');
  return io;
};