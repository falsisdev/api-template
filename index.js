const api = require('./api.js');
const express = require('express');
const app = new express();
app.get('/', function(req, res) {
  res.send(`{
  "/npm?name=:name",
  "/owofy?mesaj=:name",
  "/cat",
  "/dog",
  "/lyrics?title=:name"
}`)
});
app.get('/npm', function(req, res) {
  api.npm(req, res)
})
app.get('/owofy', function(req, res) {
  api.owofy(req, res)
})
app.get('/cat', function(req, res) {
  api.cat(req, res)
})
app.get('/dog', function(req, res) {
  api.dog(req, res)
})
app.get('/lyrics', function(req, res) {
  api.lyrics(req, res)
})
app.listen(3000)