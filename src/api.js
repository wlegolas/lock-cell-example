import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function publishEvent(eventName, ...payload) {
  socket.emit(eventName, payload);
}

function subscribeSelectCell(callback) {
  socket.on('timetableselected', cellId => callback(cellId));
} 

function unsubscribeSelectCell(cellId, cb) {
  // socket.on('timer', timestamp => cb(null, timestamp));
  console.log(`Selected cell ${ cellId }`);
  socket.emit('subscribe-select-cell', cellId);
} 

export { publishEvent, subscribeSelectCell, unsubscribeSelectCell }