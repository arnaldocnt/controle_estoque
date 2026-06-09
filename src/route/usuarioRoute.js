const express = require('express');
const router = express.Router();

const usuarioController = require('../controller/usuarioController');

router.get("/", (req, res) => {
    res.json({ mensagem: "A rota /api/teste está funcionando perfeitamente no Render!" });
});

router.get("/usuario", usuarioController.listarUsuario);
router.get("/usuario/:id", usuarioController.buscarUsuario);
// router.put("/usuario/:id", usuarioController.atualizarProduto);
// router.post("/usuario", usuarioController.criarProduto);

module.exports = router;