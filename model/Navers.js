const mongoose = require('mongoose')

const naverSchema = new mongoose.Schema({
    name:{
        type:string,
        min:6,
        max: 255
    },
    birthdate:{
        type:Date,
        default: Date.now
    },
    admission_date:{
        type:Date,
        default: Date.now
    },
    job_role: {
        type:String,
        
    }
})

module.exports = mongoose.model("Naver", naverSchema)