const express = require('express');
const usuarioController = require("./controllers/usuarios.controller");

const routes = express.Router();

routes.get('/', usuarioController.index);

// Rotas de usuários
routes.get("/api/usuarios", usuarioController.list);
routes.get("/api/usuarios.details/:_id", usuarioController.details);
routes.post("/api/usuarios", usuarioController.create);
routes.put("/api/usuarios", usuarioController.update);
routes.delete("/api/usuarios/:_id", usuarioController.delete);



module.exports = routes;