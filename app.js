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
  {id: 1, name: 'Hammer time', artist: 'MC Hammer', description:'ooooh ooh ohhh ohhh ohhhh', url: '', artwork_url: '',},
  {id: 2, name: 'man! i feel like a woman!',artist: 'Shania twain', description:'yeah gurl!', url: '', artwork_url: '',}
 ]
}

app.get('/', function(req, res) {
 res.redirect('/songs') 
})

app.get('/songs', function(req, res) {
 res.render('songsIndex', songs)
})

app.get('/songs/new', function(req, res) {
 res.render('songsNew')
})

app.get('/songs/:id', function(req,res){

  function checksongId (song) {
    return song.id == req.params.id
  }
  // console.log(req)
  var userInput = Number(req.params.id)
  var filteredsongs = songs.songs.filter(checksongId)

  res.render('songsShow',filteredsongs[0])
})


app.post('/songs', function(req,res) {
  var newSong = req.body //song from the form
  //take reqbody apart and save the pulled data with the correct keys??
  newSong.id = songs.songs.length+1
  songs.songs.push(newSong)
  res.render('songsIndex', songs)
  //read data.json before adding new song,
  //write the new data to the array,
  //then save the new array to data.json

  //pay attention to how the file writing is happening
  //as well as how to construct an obj and parse it to json file
  //https://github.com/SamSimmons/site-scraper/blob/master/index.js
})

app.get('/songs/edit/:id', function (req, res){
  console.log(res.body)
    res.render('songsEdit')
})



module.exports = app;
