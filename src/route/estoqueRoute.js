const express = require('express');
const router = express.Router();

const estoqueController = require('../controller/estoqueController');

router.get("/teste", (req, res) => {
    res.json({ mensagem: "A rota /api/teste está funcionando perfeitamente no Render!" });
});

router.get("/estoque", estoqueController.listarEstoque);
router.get("/estoque/:id", estoqueController.buscarProduto);
router.put("/estoque/:id", estoqueController.atualizarProduto);
router.post("/estoque", estoqueController.criarProduto);


module.exports = router;