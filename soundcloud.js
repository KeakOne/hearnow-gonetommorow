var request = require("superagent");
require('dotenv').config();
require('fs');

module.exports = function(url,callback) {

  request.get('http://api.soundcloud.com/resolve?url='+url+'&client_id='+process.env.API_KEY)
  .end( function (err, res, data) {
    if (err) callback(err)

    //maybe create a dataobj that will be sent to app.js? or do the saving in here??
    var songObj = {
      "artist": res.body.user.username,
      "title":res.body.title,
      "artwork":res.body.artwork_url,
      "artist_avatar":res.body.user.avatar_url,
      "artist_description":res.body.description,
      "link": res.body.user.permalink_url
    }

    callback(null, songObj)
  })

}

