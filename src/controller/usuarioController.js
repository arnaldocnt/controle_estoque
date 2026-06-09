const db = require('../config/database');

exports.listarUsuario = async (req, res) => {
    try {
        const listarUsuario = await db.query(`SELECT * FROM produtos`);
        res.json(listarUsuario.rows);
        console.log("Produtos listados com sucesso!");
    } catch (error) {
        console.error("Erro encontrado:", error);
        return res.status(500).json({ erro: "Erro ao consultar o banco de dados." });
    };
};

exports.buscarUsuario = async (req, res) => {
    try {
        const idUsuario = req.params.id;
        const buscarUsuario = await db.query(`SELECT * FROM usuarios WHERE id = $1`, [buscarUsuario]);
        res.json(buscarUsuario.rows[0]);
    } catch (error) {
        console.error("Erro encontrado:", error);
        return res.status(500).json({ erro: "Erro ao consultar o banco de dados." });
    };
};

// exports.criarUsuario = async (req, res) => {
    try {
        const { lote, produto, descricao_produto, quantidade, preco, curva, data_compra, data_venda } = req.body;
        const novoProduto = `INSERT INTO produtos (lote, produto, descricao_produto, quantidade, preco, curva, data_compra, data_venda)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *
        `; 

        const valores = [lote, produto, descricao_produto, quantidade, preco, curva, data_compra, data_venda];

        const criacao = await db.query(novoProduto, valores);
        const produtoCriado = (criacao.rows[0]);
        res.status(201).json(produtoCriado);

    } catch (error) {
        console.error("Erro ao cadastrar produto:", error);
        return res.status(500).json({ erro: "Erro interno ao salvar o produto no banco de dados." });
    };
// };

// exports.atualizarProduto = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { preco, quantidade } = req.body;
//         const atualizacao = `UPDATE produtos SET preco = $1, quantidade = $2 WHERE id = $3
//             RETURNING *
//             `;
//         const valores = [preco, quantidade, id];
//         const resultado = await db.query(atualizacao, valores);
        
//         if (resultado.rows.length === 0) {
//             return res.status(404).json({ erro: "Produto não encontrado para atualização." });
//         }

//         res.json(resultado.rows[0]);

//     } catch (error) {
//         console.error("Erro ao cadastrar produto:", error);
//         return res.status(500).json({ erro: "Erro interno ao salvar o produto no banco de dados." });
//     };
// };