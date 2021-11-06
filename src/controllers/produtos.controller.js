const produtoModel = require("../models/produtos.models");
const bcrypt = require('bcrypt');
const utils = require('../functions/utils');

module.exports = {

    index(req, res){
        let msg = {
            message: "Hello World from Controller Produtos"
        };
        console.log(msg);
        res.json(msg);
    },
    async list(req, res){
        // TODO: adicionar try/catch
        // TODO: adicionar parametros de listagem
        // TODO: adicionar logs
        // TODO: adicionar validação de permissão
        console.log("Estou no Controller Produtos: list");
        let produtos = await produtoModel.find();
        res.json(produtos);
    },
    async create(req, res){
        try{
            // TODO: adicionar try/catch
            // TODO: adicionar logs
            // TODO: adicionar validação de permissão
            console.log("Estou no Controller Produtos: create");
            let data = req.body;
            
            let produto = await produtoModel.findOne({nome:data.nome});

            // TODO: tratar erro de nome já cadastrado

            let errors = null;
            if (!produto){

                produto = new produtoModel(data);
                errors = utils.validateModel(produto);

                if(errors == null){
                    produto = await produtoModel.create(produto);
                    return res.status(200).json(produto);
                }
            }
            return res.status(500).json(errors);
        }
        catch(error){
            console.log(error);
        }
    },
    async details(req, res){
        // TODO: adicionar try/catch
        // TODO: adicionar logs
        // TODO: adicionar validação de permissão
        console.log("Estou no Controller Produtos: details");
        let _id = req.params._id;
        console.log("params: ", _id);
        let produto = await produtoModel.findOne({_id:_id});
        res.json(produto);
    },
    async delete(req, res){
        // TODO: adicionar try/catch
        // TODO: adicionar logs
        // TODO: adicionar validação de permissão
        console.log("Estou no Controller Produtos : delete");
        let _id = req.params._id;
        console.log("params: ", _id);
        let produto = await produtoModel.findByIdAndDelete({_id:_id});
        res.json(produto);
    },
    async update(req, res){
        // TODO: adicionar try/catch
        // TODO: adicionar logs
        // TODO: adicionar validação de permissão
        console.log("Estou no Controller Produtos : update");
        let data = req.body;
        console.log("params: ", data);

        // TODO: validar alteração de senha

        let produto = await produtoModel.findByIdAndUpdate({_id: data._id}, data, {new: true});
        res.json(produto);
    }
}