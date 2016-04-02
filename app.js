var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//---------------------Ignore above here-------------------//
var songs = {
 songs: [
  {id: 1, name: 'fluffy', life_story:'I was fluffy once.. then I took an arrow to the knee'},
  {id: 2, name: 'tick', life_story:'Tick Tock'}
 ]
}

app.get('/', function(req, res) {
 res.redirect('/songs') // what is this doing?
})

app.get('/songs', function(req, res) {
 res.render('songsIndex', songs)
})

app.get('/songs/new', function(req, res) {
 res.render('songsNew')
})

app.get('/songs/:id', function(req,res){
  // console.log(req.params); // try going to /songs/1
  function checkCatId (cat) {
    return cat.id == req.params.id
  }
  var userInput = Number(req.params.id)
  var filteredsongs = songs.songs.filter(checkCatId)

  res.render('songsShow',filteredsongs[0])
})


app.post('/songs', function(req,res) {
  var newCat = req.body //cat from the form
  newCat.id = songs.songs.length+1
  songs.songs.push(newCat)
  res.render('songsIndex', songs)
})

app.get('/songs/edit/:id', function (req, res){
  console.log(res.body)
    res.render('songsEdit')
})



module.exports = app;
