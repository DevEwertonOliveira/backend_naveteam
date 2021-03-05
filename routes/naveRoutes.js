const router = require('express').Router();
const verify = require('./verifyToken')

const Projeto = require('../model/Projetos')
const Naver = require('../model/Navers')


router.get('/index',verify, async(req,res) => {
    try {
        const naverIndex = await Naver.find()

        return res.send({ naverIndex })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading naver' })
    }
})

router.get('/:showId', verify,async(req, res) =>{
    try {
        const naverShow = await Naver.findById(req.params.showId)

        return res.send({ naverShow })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading naverId' })
    }
})

router.post('/store', verify, async(req, res) =>{
    try {

        const { name, birthdate, admission_date, job_role } = req.body;

        const navers = await Naver.create({ name, birthdate, admission_date, job_role })
        
        projetos.map(projeto =>{
            const naverTask = new Projeto({ ...projetos, naver: navers._id})
        })

        await naver.save()


        return res.send({ navers })
    } catch (error) {
        return res.status(400).send({ error: 'Error creating new naver' })
    }
})

router.post('/:updateId',verify, async (req, res) =>{
    
})

router.delete('/:deleteId',verify, async(req, res) =>{
    try {
        await Naver.findByIdAndRemove(req.params.deleteId)

        return res.send()
    } catch (error) {
        return res.status(400).send({ error: 'Error delete naver' })
    }
})

module.exports = router