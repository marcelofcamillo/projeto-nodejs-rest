const customExpress = require('./config/customExpress');

const conexao = require('./infraestrutura/conexao');
conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    const app = customExpress();
    const porta = 3000;

    app.listen(porta, () => {
      console.log(`Servidor rodando na porta ${porta}.`);
    });
  }
});
