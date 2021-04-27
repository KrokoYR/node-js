import http from 'http';
import fs from 'fs'

console.log(process.argv);
let directoryPath = process.arch[2];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(data)
})
server.listen(8001, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:8001')
})

// fs.readFile('./homework.json', 'utf-8', (err, data) => {
//   if(err) {
//     throw new Error(err);
//   }

//   console.log(process.argv);


// })