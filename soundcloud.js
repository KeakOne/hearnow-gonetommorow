var request = require("superagent");
require('dotenv').config();
require('fs');

module.exports = function(url,callback) {
  console.log(url, "raw url from form")
  console.log(process.env.API_KEY, "got my keys")


  request.get('http://api.soundcloud.com/resolve?url='+url+'&client_id='+process.env.API_KEY)

  .end( function (err, res, data) {

    if (res.body == false) {
      console.log('OH MY GOD ITS DYING');
    }

    if (err) callback(err)



    var songObj = {
      "artist":            res.body.user.username,
      "title":             res.body.title,
      "artwork":           res.body.artwork_url,
      "artist_avatar":     res.body.user.avatar_url,
      "artist_description":res.body.description,
      "link":              res.body.user.permalink_url,
      "soundcloud_id":     res.body.id,
      "created_at":        Date.now(),
      "kill_at":           Date.now()+43200
    }

    callback(null, songObj)
  })

}
