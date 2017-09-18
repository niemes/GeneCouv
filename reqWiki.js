const request = require('request');
var reqRandom = "https://commons.wikimedia.org/w/api.php?action=query&list=random&rnnamespace=6&rnlimit=1format%3Djson&format=json";

function requete(url){

  request(url, function (error, response, body) {
    if (url === reqRandom) {

    }
    if (error === null) {
      let result = JSON.parse(body),
          file = result.query.random[0].title;

      console.log(file);
      return result

    } else return console.log(error);
  });
}


requete(reqRandom);
