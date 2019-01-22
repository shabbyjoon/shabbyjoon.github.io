const express = require ('express');
const path = require ('path');
const app = express ();
const port = 2001;

app.use (express.static (path.join (__dirname, '/public')));

app.get ('/', (req, res) => {
  res.send ('hello world');
});

app.listen (port, () => console.log (`listening on ${port}`));
