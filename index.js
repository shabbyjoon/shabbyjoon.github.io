const express = require ('express');
const path = require ('path');
const app = express ();
const port = 2001;
const apiHelper = require('./api_helper');

app.use (express.static (path.join (__dirname, '/public')));

app.get ('/', (req, res) => {
  res.send ('hello world');
});

app.get('/getZenQuotes', (req, res) => {
  apiHelper.makeApiCall('https://zenquotes.io/api/random')
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
})

app.listen (port, () => console.log (`listening on ${port}`));
