//get Image info

exports.getSize = function(imgPath,callback) {

const gm = require('gm');

  gm(imgPath)
  .size(function (err, size) {
    if (!err) {
      let width = size.width,
          hauteur = size.height;
      console.log('width = ' + size.width);
      console.log('height = ' + size.height);

      return callback(width)

    } else return callback(err);
  });

}
