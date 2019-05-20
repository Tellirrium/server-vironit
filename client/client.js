const net = require('net');

const socket = new net.Socket();

socket.connect({ host: '127.0.0.1', port: 8080 }, () => {
  console.log('Connected to server');
});

socket.on('data', (data) => {
  const result = data.toString().trim();

  if (/Hello/i.test(result)) {
    socket.write('World');
  }
});
