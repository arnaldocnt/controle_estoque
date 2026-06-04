const express = require('express');
const app = express();

app.use(express.json());

const rotaEstoque = require('./src/route/estoqueRoute');
// const rotaUsuario = require('./src/route/usuarioRoute');

app.use('/api', rotaEstoque);
// app.use('/api', rotaUsuario);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});