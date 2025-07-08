const express = require('express');
const postsRouter = require('./routes/posts');

const app = express();
app.use(express.json());

app.use('/api/posts', postsRouter);

// Sample root route
app.get('/', (req, res) => {
  res.send('MERN Testing App API');
});

module.exports = app; 