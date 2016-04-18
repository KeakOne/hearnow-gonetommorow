var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var get = require("superagent");
var fs = require("fs");
var soundcloud = require("./soundcloud.js")
var sqlite3 = require("sqlite3");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
  filename: './dev.sqlite3'
  },
  useNullAsDefault: true
});

function readAllSongs(callback) {
  knex.select('*').from('songs')
    .then( function(data) {
      callback(null, data)
    })
    .catch( function(err) {
      callback(err)
    })
}

function readSong(id, callback) {
  knex.select('*').from('songs').where({
    id: id,
  })
  .then( function(data) {
    callback(null,data)
  })
  .catch( function(err){
    callback(err)
  })
}

//---------------------Ignore above here-------------------//
app.get('/', function(req, res) {
 res.redirect('/songs')
})

app.get('/songs', function(req, res) {
  readAllSongs( function(err,data) {
    // if (err)  something

    res.render('songsIndex', {songs: data})
  }) 
})

app.get('/songs/new', function(req, res) {
  res.render('songsNew')
})

app.get('/songs/:id', function(req,res){
  readSong(req.params.id, function(err,data) {
    if (err) {
      // redirect to error page
    }
    console.log('the song',data)
    res.render('songsShow',data[0])
  })

  // console.log(req)
//   var userInput = Number(req.params.id)
//   var filteredsongs = songs.songs.filter(checksongId)

//   res.render('songsShow',filteredsongs[0])
})


app.post('/songs', function(req,res) {
  var newSong = req.body.song //song-url unprocessed from the form
  // console.log(newSong);
  // soundcloud(newSong)
  soundcloud(newSong, function(err, songObj){
    if (err) throw err
      //save to db dawg!!!

    knex('songs').insert(songObj)
      .then( function(data) {
        console.log(data) })
      .catch( function(err) {
        console.log("here is the obj", songObj)
        console.log('an err!',err)
      })
    songs.songs.push(songObj)
    res.render('songsIndex', songs)
  })
})

app.get('/songs/help', function (req, res){
  res.render('songsHelp')
})

app.get('/songs/edit/:id', function (req, res){
  console.log(res.body)
    res.render('songsEdit')
})






module.exports = app;
