const fs = require('fs');

fs.createReadStream('./assets/dog.jpg')
  .pipe(fs.createWriteStream('./assets/dogStream.jpg'))
  .on('finish', () => {
    console.log('A imagem foi escrita com sucesso!');
  });
