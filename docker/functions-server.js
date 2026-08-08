const http = require('http');
const handler = require('../netlify/functions/create-checkout-session');

const server = http.createServer(async (req, res) => {
  if (req.method !== 'POST') {
    res.writeHead(405);
    res.end('Method Not Allowed');
    return;
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    const event = {
      httpMethod: 'POST',
      body,
      headers: { origin: req.headers.origin || 'http://localhost:8888' },
    };

    const result = await handler.handler(event);
    res.writeHead(result.statusCode, result.headers || {});
    res.end(result.body);
  });
});

server.listen(9999, () => console.log('Functions server on port 9999'));
