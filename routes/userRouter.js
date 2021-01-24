const router=require('express').Router()
const userCtrl=require('../controllers/userCtrl')

router.post('/register',userCtrl.regiser)

module.exports = router