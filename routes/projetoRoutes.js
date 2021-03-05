const router = require('express').Router();
const verify = require('./verifyToken')

const Projeto = require('../model/Projetos')
const Naver = require('../model/Navers')


router.get('/index',verify, (req,res) => {
    res.send("hello world")
})

router.get('/:show', (req, res) =>{

})

router.post('/store', (req, res) =>{

})

router.post('/update', (req, res) =>{
    
})

router.delete('/store', (req, res) =>{
    
})

module.exports = router