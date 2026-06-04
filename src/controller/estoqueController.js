const { createDatabase } = require('../../database');

exports.listarEstoque = async (req, res) => {
    try {
        const db = await createDatabase();
        const listarEstoque = await db.all(`SELECT * FROM produtos`);
        res.json(listarEstoque);
        console.log("Produtos listados com sucesso!");
    } catch (error) {
        console.error("Erro encontrado:", error);
        return res.status(500).json({ erro: "Erro ao consultar o banco de dados." });
    };
};

exports.buscarProduto = async (req, res) => {
    try {
        const db = await createDatabase();
        const idProduto = req.params.id;
        const buscarProduto = await db.all(`SELECT * FROM produtos WHERE id = ?`, [idProduto]);
        res.json(buscarProduto)
    } catch (error) {
        console.error("Erro encontrado:", error);
        return res.status(500).json({ erro: "Erro ao consultar o banco de dados." });
    };
};

exports.criarProduto = async (req, res) => {
    try {
        const { lote, produto, descricao_produto, quantidade, preco, curva, data_compra, data_venda } = req.body;
        const db = await createDatabase();
        const novoProduto = await db.run(`INSERT INTO produtos (lote, produto, descricao_produto, quantidade, preco, curva, data_compra, data_venda)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [lote, produto, descricao_produto, quantidade, preco, curva, data_compra, data_venda])
        res.json(novoProduto);

    } catch (error) {
        console.error("Erro ao cadastrar produto:", error);
        return res.status(500).json({ erro: "Erro interno ao salvar o produto no banco de dados." });
    };
};

exports.atualizarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const { preco, quantidade } = req.body;

        const db = await createDatabase();

        const atualizacao = await db.run(`UPDATE produtos SET preco = ?, quantidade = ? WHERE id = ?`,
            [preco, quantidade, id]);

        res.json(atualizacao);

    } catch (error) {
        console.error("Erro ao cadastrar produto:", error);
        return res.status(500).json({ erro: "Erro interno ao salvar o produto no banco de dados." });
    };
};