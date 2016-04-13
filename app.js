var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var get = require("superagent");
var fs = require("fs");
var soundcloud = require("./soundcloud.js")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//---------------------Ignore above here-------------------//
var songs = {
 songs: [
  {id: 1, title: 'D.R.N.D.Y - XHXX (Original Mix) [PATTERNS 027D]', artist: 'Patterns Records', artist_description:"Supported by: Richie Hawtin, Marco Carola, Joseph Capriati, Paco Osuna, Mike Vath, Horacio Cruz, Kazu Kimura, Klaudia Gawlas and many others...", link: 'http:// soundcloud.com/patterns-records', artist_avatar: 'https://i1.sndcdn.com/avatars-000014659765-dkzcll-large.jpg', artwork:'https://i1.sndcdn.com/artworks-000121732955-g3ob4k-large.jpg', stream_url:''},
  {id: 2, title: 'jumanji', artist: 'PXLX', artist_description:'vocals removed from soundcloud due to copyright click download for full version\r\n\r\nfacebook.com/fxrxvxrpxlx\r\ntwitter.com/fxrxvxrpxlx\r\npolo.thesecret.club', link: 'http://soundcloud.com/fxrxvxrpxlx', artist_avatar: 'https://i1.sndcdn.com/avatars-000208709440-s3sdxs-large.jpg', artwork:'https://i1.sndcdn.com/artworks-000101146600-ronxxr-large.jpg', stream_url:''}
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
  var newSong = req.body.song //song-url unprocessed from the form
  // console.log(newSong);
  // soundcloud(newSong)
  soundcloud(newSong, function(err, songObj){
    if (err) throw err

    // write to the result -songObj- to file system
  // console.log(songObj)
  songObj.id = songs.songs.length+1
    console.log(songObj)
  songs.songs.push(songObj)
  res.render('songsIndex', songs)
  })

  // songs.songs.push(songObj)
  // res.render('songsIndex', songs)

  //read data.json before adding new song,
  //write the new data to the array,
  //then save the new array to data.json
})

app.get('/songs/edit/:id', function (req, res){
  console.log(res.body)
    res.render('songsEdit')
})



module.exports = app;
