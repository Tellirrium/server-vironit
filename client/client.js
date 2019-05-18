const net = require('net');

const s = new net.Socket();
// const client = net.createConnection({ port: 8080, host: '127.0.0.1' }, () => {
//   console.log('Connected to server');
// });

// client.on('data', (data) => {
//   const result = data.toString();
//   if (result === 'World') {
//     console.log('Hello world');
//   }
// });

// client.write('Hello');
// client.end();

s.connect({ host: '127.0.0.1', port: 8080 }, () => {
  console.log('Connected to server');
});

s.on('data', (data) => {
  const result = data.toString();

  if (result === 'Hello') {
    console.log('World');
  }
});
