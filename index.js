const api = require('./api.js');
const express = require('express');
const app = new express();
console.log("💚 Api Başlatıldı")
app.get('/', function(req, res) {
  res.send(`{
  "/npm?name=:name&key=YOUR_KEY",
  "/owofy?mesaj=:name",
  "/cat",
  "/dog",
  "/lyrics?title=:name",
  "/translate?text=Hello&lang=tr&from=en&key=YOUR_KEY",
  "/wiki?wiki=:name",
  "/color?hex=:hex",
  "/youtube?title=:search"
}`)
});
app.get("/youtube", function(req, res) {
  api.youtube(req, res)
})
app.get("/color", function(req, res) {
  api.color(req, res)
})
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
app.get("/wiki", function(req, res) {
  api.wiki(req, res)
})
app.get("/translate", function(req, res) {
  api.translate(req, res)
})
app.listen(3000)
