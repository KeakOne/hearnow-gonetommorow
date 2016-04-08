var request = require("superagent");
require('dotenv').config();

module.exports = function(url,callback) {
  //hit the soundcloud api with the url

request.get('http://api.soundcloud.com/resolve?url=http://soundcloud.com/matas/hobnotropic&client_id='+process.env.API_KEY)
.end( function (err, res, data) {
  if (err) throw err
  // console.log(res.statusCode) // 200
  // console.log(res.body)
// console.info(data.toString())
var artist = res.body.user.username;
var title = res.body.title;
var artwork = res.body.artwork_url;
var artist_avatar = res.body.user.avatar_url;
var artist_description = res.body.description
var link = res.body.user.permalink_url;
console.log(artist,title,artwork,artist_avatar, artist_description,link)
})
  //find out artist
  //find the artwork url
  //find the title
  //find the length
  //when finsished
  callback(undefined, {
    artist: 'bob',
    artwork: 'url',
    title: 'song',
    length: 405,
})}
