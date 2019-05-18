const net = require('net');

const server = net.createServer((client) => {
  console.log('client connected');
  setInterval(() => {
    client.write('Hello');
  }, 5000);
  // client.on('data', (data) => {
  //   const result = data.toString();
  //   if (result === 'Hello') {
  //     client.write('World');
  //   }
  // });
});

server.listen({
  host: '127.0.0.1',
  port: 8080,
  exclusive: true,
});
