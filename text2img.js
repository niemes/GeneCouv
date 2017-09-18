// text2img
// ------------------------- Mise en place du texte sur l'image -------------------------

exports.writeIMG = function(name,text){
    var Jimp = require("jimp");
    var fileName = name;
    var imageCaption = text;
    var loadedImage;

    Jimp.read(fileName)
        .then(function (image) {
            loadedImage = image;
            return Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
        })
        .then(function (font) {
            loadedImage.print(font, 50, 150, imageCaption)
                    .write(fileName);
        })
        .catch(function (err) {
            console.error(err);
        });
}
