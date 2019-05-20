const net = require('net');

const server = net.createServer((socket) => {
  console.log('client connected');
  setInterval(() => {
    socket.write('Hello');
  }, 5000);

  socket.on('data', (data) => {
    const result = data.toString().trim();

    if (/World/i.test(result)) {
      console.log('Hello World');
    }
  });
});

server.listen({
  host: '127.0.0.1',
  port: 8080,
  exclusive: true,
});
