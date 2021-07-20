const customExpress = require('./config/customExpress');
const Tabelas = require('./infraestrutura/tabelas');
const conexao = require('./infraestrutura/conexao');
conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log('Conectado com sucesso!');

    Tabelas.init(conexao);

    const app = customExpress();
    const porta = 3000;

    app.listen(porta, () => {
      console.log(`Servidor rodando na porta ${porta}.`);
    });
  }
});
