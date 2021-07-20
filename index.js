const customExpress = require('./config/customExpress');
const app = customExpress();
const porta = 3000;

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}.`);
});
