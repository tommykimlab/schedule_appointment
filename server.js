const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Test route 1: Hello World
  server.get('/api/hello', (req, res) => {
    res.send('Hello World!');
  });

  // Test route 2: JSON response
  server.get('/api/data', (req, res) => {
    res.json({ message: 'This is a test', number: 42 });
  });

  // Default catch-all route to allow Next.js to handle all other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
