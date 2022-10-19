const express = require('express');
var fs = require("fs");
const path = require('path');
const https = require("https");
const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('dist'))
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../dist/index.html'));
});
https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert"),
    },
    app
  )
  .listen(3000, function () {
    console.log(
      "Example app listening on port 3000! Go to https://localhost:3000/"
    );
  });