const fs = require('fs');

fs.readFile('./assets/dog.jpg', (erro, buffer) => {
  console.log('A imagem foi bufferizada');

  fs.writeFile('./assets/dog2.jpg', buffer, () => {
    console.log('A imagem foi escrita');
  });
});
