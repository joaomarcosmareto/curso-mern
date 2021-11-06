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
        descricao: {
            required: [true, "O campo descrição é obrigatório"],
            type: String, 
            minlength: [2, "Tamanho mínimo para o campo email é 2, o valor informado foi {VALUE}"],
            maxLength: [255, "Tamanho máximo para o campo email é 255, o valor informado foi {VALUE}"],
            trim: true
        },
        preco: {
            required: [true, "O campo preço é obrigatório"],
            type: Number, 
            default: 1.99
        },
        quantidade: {
            required: [true, "O campo quantidade é obrigatório"],
            type: Number, 
            default: 0
        },
    },
    {
        timestamps: true
    }
);

const produtos = mongoose.model("produtos", DataSchema, "produtos");

module.exports = produtos;