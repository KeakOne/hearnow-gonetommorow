var soundcloud = require("./soundcloud.js")


var url = "https://soundcloud.com/teenagedirtbag69/the-ep-before-the-album"
var callback = function(err,data){
  // console.log(err,data)
}

soundcloud(url, callback)
