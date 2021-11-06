const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema(
    {
        nome: {
            required: [true, "O campo nome é obrigatório"],
            type: String,
            minlength: [2, "Tamanho mínimo para o campo nome é 2, o valor informado foi {VALUE}"],
            maxLength: [255, "Tamanho máximo para o campo nome é 255, o valor informado foi {VALUE}"],
            trim: true
        },
        email: {
            required: [true, "O campo email é obrigatório"],
            type: String, 
            minlength: [2, "Tamanho mínimo para o campo email é 2, o valor informado foi {VALUE}"],
            maxLength: [255, "Tamanho máximo para o campo email é 255, o valor informado foi {VALUE}"],
            trim: true
        },
        tipo: {
            required: [true, "O campo tipo é obrigatório"],
            type: Number, 
            default: 1
        },
        senha: {
            required: [true, "O campo senha é obrigatório"],
            type: String, 
            minlength: [2, "Tamanho mínimo para o campo senha é 2, o valor informado foi {VALUE}"],
            maxLength: [255, "Tamanho máximo para o campo senha é 255, o valor informado foi {VALUE}"],
            trim: true
        },
    },
    {
        timestamps: true
    }
);

// DataSchema.pre('save', function(next){
    
//     const err = this.validateSync();
//     if (err) {
//         console.log(err);
//     } else {
//         // validation passed
//     }


//     if(!this.isModified("senha")){
//         return next();
//     }
//     try{
//         this.senha = bcrypt.hashSync(this.senha, 10);
//         next();
//     }
//     catch(error){
//         console.log("campo senha vazio");
//         next(error);
//     }
    
    
// });

const usuarios = mongoose.model("usuarios", DataSchema, "usuarios");

module.exports = usuarios;