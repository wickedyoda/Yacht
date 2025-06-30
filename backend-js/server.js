const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use('/', express.static(path.join(__dirname, '..', 'dist')));

app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
