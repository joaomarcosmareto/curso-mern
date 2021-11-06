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
    async create(req, res){
        try{
            console.log("estou no usuarioController.")
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
    }
}