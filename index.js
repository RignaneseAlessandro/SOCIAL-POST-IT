let express = require('express');
let path = require('path');
let bodyParser = require('body-parser')
let data = require('./data/data.json');
let app = express();
let myLibrary = require('./myFile.js')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app_views'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
  res.render('pages/index', {
    titoloJSON: "Home",
    currentPage: "Home"
  });
});

app.get('/table', function(req, res) {

  data = myLibrary.readFile('./data/data.json');

  res.render('pages/table', {
    data: data,
    titoloJSON: "Table",
    currentPage: "Table"
  });
});

app.post('/scrivi', function(req, res) {
  let dataJSON = myLibrary.readFile('./data/data.json');

  let person = {
    name: req.body.name,
    nickname: req.body.nickname,
    score: req.body.score,
  }

  myLibrary.addElementToJSON(dataJSON, person);

  myLibrary.writeFileJSON('./data/data.json', dataJSON);

  res.redirect('/table');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});