const db = require('../repositories/Database')

const UserSchema = new db.mongoose.Schema({

    createdAt: {
        type: Date,
        default: Date.now
    },
    username: String,
    password: String,
    name: String

})

module.exports = db.mongoose.model('User', UserSchema)