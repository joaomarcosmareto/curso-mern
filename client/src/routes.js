import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

// IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';

import ProdutosListagem from './pages/admin/produtos/produtos.listagem';
import ProdutosEditar from './pages/admin/produtos/produtos.editar';
import ProdutosCadastrar from './pages/admin/produtos/produtos.cadastrar';

import UsuariosListagem from './pages/admin/usuarios/usuarios.listagem';
import UsuariosEditar from './pages/admin/usuarios/usuarios.editar';
import UsuariosCadastrar from './pages/admin/usuarios/usuarios.cadastrar';

// IMPORTS CLIENT

import Home from './pages/client/home';
import ProdutosDetails from './pages/client/produtos/produtos.details';

export default function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                {/* Rotas do cliente */}
                <Route path="/" exact element={<Home/>} />
                <Route path="/produtos/:idProduto" exact element={<ProdutosDetails/>} />

                {/* Rotas do admin */}
                <Route path="/admin" exact element={<Dashboard/>} />

                <Route path="/admin/produtos" exact element={<ProdutosListagem/>} />
                <Route path="/admin/produtos/cadastrar" exact element={<ProdutosCadastrar/>} />
                <Route path="/admin/produtos/editar/:idProduto" exact element={<ProdutosEditar/>} />

                <Route path="/admin/usuarios" exact element={<UsuariosListagem/>} />
                <Route path="/admin/usuarios/cadastrar" exact element={<UsuariosCadastrar/>} />
                <Route path="/admin/usuarios/editar/:idUsuario" exact element={<UsuariosEditar/>} />

            </Routes>
        </BrowserRouter>
    )

}