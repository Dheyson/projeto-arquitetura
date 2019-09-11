const db = require('../database/Database')

const UserSchema = new db.mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false, 
        // O select Especifica o comportamento padrão de seleção de caminho. Em outras palavras, você pode especificar se esse caminho deve ser incluído ou excluído dos resultados da consulta por padrão.
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})



module.exports = db.mongoose.model('User', UserSchema)