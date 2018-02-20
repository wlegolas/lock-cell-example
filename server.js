const io = require('socket.io')();

const notifyEveryone = (eventName, ...params) => {
  io.emit(eventName, params);
};

const notifyOther = (client, eventName, ...params) => {
  client.broadcast.emit(eventName, params);
};

io.on('connection', (client) => {
  client.on('timetableselected', (cellId) => {
    console.log(`Client was selected the timetable ${ cellId }`);

    notifyOther(client, 'timetableselected', cellId);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);