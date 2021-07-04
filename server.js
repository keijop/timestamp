// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// handlers
const { noParamResponse, dateResponse } = require('./controllers/handlers')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// no params get request
app.get('/api', noParamResponse);

// get request with param
app.get('/api/:date', dateResponse);


app.listen(5000, () => console.log('app is listening on port 5000...'))

// listen for requests :)
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });
