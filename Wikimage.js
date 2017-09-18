//------------------------- Recuperation des images sur wiki image -------------------------
const fs = require('fs'),
 request = require('request');
const txtImg = require('./text2img.js');
const imgInfo = require('./imgInfo.js');

let Categories = "https://commons.wikimedia.org/w/api.php?action=query&titles=Image:Commons-logo.svg&prop=imageinfo";
let random = "https://commons.wikimedia.org/w/api.php?action=query&list=random&rnnamespace=6&rnlimit=1format%3Djson&format=json&prop=url";

function getImgTitle(){
  request(random, function (error, response, body) {
    if (error === null) {
      let reqImg = JSON.parse(body),
          img = reqImg.query.random[0].title,
          title = img.substring(5,img.length);

      var url = "https://commons.wikimedia.org/wiki/:en:Special:Filepath/" + title;

      console.log("url =",url);

      download(url, title, function(){
        console.log("Tâches terminées - Image téléchargée.")
        imgInfo.getSize(title)
          txtImg.writeIMG(title ,"Théo Eureka!");
      });

    } else return console.log(error);
  });
}
//------------------------- Téléchargement de l'image Wikimedia -------------------------
var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    if (res.headers['content-length'] != undefined) {
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    } else throw err

  });
};

getImgTitle();
