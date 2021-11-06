const usuarioModel = require("../models/usuarios.models");
const bcrypt = require('bcrypt');
const utils = require('../functions/utils');

module.exports = {

    index(req, res){
        let msg = {
            message: "Hello World from Controller Usuários"
        };
        console.log(msg);
        res.json(msg);
    },
    async list(req, res){
        // TODO: adicionar try/catch
        // TODO: adicionar parametros de listagem
        // TODO: adicionar logs
        // TODO: adicionar validação de permissão
        console.log("Estou no Controller Usuários: list");
        let users = await usuarioModel.find();
        res.json(users);
    },
    async create(req, res){
        try{
            // TODO: adicionar try/catch
            // TODO: adicionar logs
            // TODO: adicionar validação de permissão
            console.log("Estou no Controller Usuários: create");
            let data = req.body;
            
            let user = await usuarioModel.findOne({email:data.email});
            let errors = null;
            if (!user){

                user = new usuarioModel(data);
                errors = utils.validateModel(user);

                if(errors == null){
                    user.senha = bcrypt.hashSync(user.senha, 10);
                    user = await usuarioModel.create(user);
                    
                    return res.status(200).json(user);
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
        console.log("Estou no Controller Usuários: details");
        let _id = req.params._id;
        console.log("params: ", _id);
        let user = await usuarioModel.findOne({_id:_id});
        res.json(user);
    },
    async delete(req, res){
        // TODO: adicionar try/catch
        // TODO: adicionar logs
        // TODO: adicionar validação de permissão
        console.log("Estou no Controller Usuários : delete");
        let _id = req.params._id;
        console.log("params: ", _id);
        let user = await usuarioModel.findByIdAndDelete({_id:_id});
        res.json(user);
    },
    async update(req, res){
        // TODO: adicionar try/catch
        // TODO: adicionar logs
        // TODO: adicionar validação de permissão
        console.log("Estou no Controller Usuários : update");
        let data = req.body;
        console.log("params: ", data);

        // TODO: validar alteração de senha

        let user = await usuarioModel.findByIdAndUpdate({_id: data._id}, data, {new: true});
        res.json(user);
    }
}