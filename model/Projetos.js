const mongoose = require('mongoose')


const projetoSchema = new mongoose.Schema({
    name:{
        type:String,
        min:6,
        max: 255,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    naver: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Naver',
        required: true
    },
    
})

module.exports = mongoose.model("Projeto", projetoSchema)