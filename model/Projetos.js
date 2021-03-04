const mongoose = require('mongoose')

const projetoSchema = new mongoose.Schema({
    name: {
        type:String
    }
})

module.exports = mongoose.model("Projeto", projetoSchema)