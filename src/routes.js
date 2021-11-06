const express = require('express');
const usuarioController = require("./controllers/usuarios.controller");

const routes = express.Router();

routes.get('/', usuarioController.index);
routes.post("/api/usuarios", usuarioController.create);

module.exports = routes;