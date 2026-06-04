const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const rotaEstoque = require('./src/route/estoqueRoute');
// const rotaUsuario = require('./src/route/usuarioRoute');

app.use('/api', rotaEstoque);
// app.use('/api', rotaUsuario);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});