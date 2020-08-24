/*
  Incredibly simple Node.js and Express application server for serving static assets.
  Given as an example from the React Router documentation (along with examples
  using nginx and Apache):
  - https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
*/

var express = require('express');
var app = express();

app.get('/thing', (req, res) => {
  res.send('Hello World from First Broker App')
  console.log("Hello")
})

app.get('/thing/test', (req, res) => {
  res.send("This is a test of an entrypoint!");
})


app.listen(8001);