  var request = require("superagent");
  require('dotenv').config();

 //the url being sent from app.js line 54
// console.log(userSubmittedLink)

module.exports = function(url,callback) {
  //hit the soundcloud api with the url
  //


https://soundcloud.com/fxrxvxrpxlx/when-i-was-away-i-went-to-get-food-with-my-gf-and-they-had-a-piano

  console.log("in the soundcloud js", url)
  request.get('http://api.soundcloud.com/resolve?url='+url+'&client_id='+process.env.API_KEY)
  .end( function (err, res, data) {
    if (err) throw err
      // console.log(data)
    console.log(data)

  var artist = res.body.user.username;
  var title = res.body.title;
  var artwork = res.body.artwork_url;
  var artist_avatar = res.body.user.avatar_url;
  var artist_description = res.body.description
  var link = res.body.user.permalink_url;
  // console.log(artist,title,artwork,artist_avatar, artist_description,link)
}) 

  callback(undefined, {
    artist: artist,
    artwork: artwork,
    title: title,
    artist_avatar: artist_avatar,
    artist_description: artist_description,
    link: link
})}

