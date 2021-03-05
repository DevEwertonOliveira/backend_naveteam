const mongoose = require('mongoose')


const naverSchema = new mongoose.Schema({
    name:{
        type:String,
        min:6,
        max: 255,
        required:true
    },
    projeto: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projeto',
        required: true
    }],

    birthdate:{
        type:Date,
        default: Date.now,
        required:true
    },
    admission_date:{
        type:Date,
        default: Date.now,
        required:true
    },
    job_role: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Naver", naverSchema)