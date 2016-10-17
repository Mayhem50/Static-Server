var express = require('express');
var path = require('path');

var app = express();
// static file serve
app.use(express.static(path.join(__dirname, 'public')));
// not found in static files, so default to index.html
app.use((req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

module.exports = app;
