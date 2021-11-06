const express = require('express');
const usuarioController = require("./controllers/usuarios.controller");
const produtoController = require("./controllers/produtos.controller");

const routes = express.Router();

routes.get('/', usuarioController.index);

// Rotas de usuários
routes.get("/api/usuarios", usuarioController.list);
routes.get("/api/usuarios.details/:_id", usuarioController.details);
routes.post("/api/usuarios", usuarioController.create);
routes.put("/api/usuarios", usuarioController.update);
routes.delete("/api/usuarios/:_id", usuarioController.delete);

// Rotas de produtos
routes.get("/api/produtos", produtoController.list);
routes.get("/api/produtos.details/:_id", produtoController.details);
routes.post("/api/produtos", produtoController.create);
routes.put("/api/produtos", produtoController.update);
routes.delete("/api/produtos/:_id", produtoController.delete);



module.exports = routes;