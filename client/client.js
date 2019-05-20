const net = require('net');
const process = require('process');

const socket = new net.Socket();

socket.connect({ host: '127.0.0.1', port: 8080 }, () => {
  console.log('Connected to server');
});

// const id = socket.remotePort;
process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   let chunk;

//   // eslint-disable-next-line no-cond-assign
//   while ((chunk = process.stdin.read()) !== null) {
//     socket.write(`data: ${chunk}`);
//   }
// });
process.stdin.on('end', () => {
  process.stdout.write('end');
});

process.stdin.on('data', (data) => {
  const result = data.toString().trim();

  if (/end/i.test(result)) {
    socket.end(result);
  } else {
    socket.write(result);
  }
});

socket.on('data', (data) => {
  const result = JSON.parse(data);
  process.stdout.write(`${result.id}: ${result.message}\n`);
});
