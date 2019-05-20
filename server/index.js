/* eslint-disable no-restricted-syntax */
const net = require('net');

const socketTable = [];
const clients = {};
const server = net.createServer((socket) => {
  console.log('client connected');
  socketTable.push(socket);
  // setInterval(() => {
  //   socket.write('Hello');
  // }, 5000);

  socket.on('data', (data) => {
    const result = data.toString().trim();

    if (/^Hello$/ig.test(result)) {
      process.stdout.write('World\n');
    } else if (result === 'end' && socketTable !== 0) {
      socketTable.pop();
      if (socketTable.length === 0) {
        server.close();
      }
    } else {
      // socketTable.filter(elem => socket !== elem).forEach((element) => {
      //   element.write(result);
      // });

      // eslint-disable-next-line guard-for-in
      for (const key in clients) {
        const obj = {
          id: socket.remotePort,
          message: result,
        };
        if (clients[key] !== socket) {
          clients[key].write(JSON.stringify(obj));
        }
      }
    }
  });
});

server.listen({
  host: '127.0.0.1',
  port: 8080,
  exclusive: true,
});

server.on('connection', (socket) => {
  clients[socket.remotePort] = socket;
});
