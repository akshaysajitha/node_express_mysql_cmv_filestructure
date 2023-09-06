const express =require("express")
const router= express.Router()

const usercontroller=require('../controllers/usercontroller')

router.put('/signin',usercontroller.createuser),
router.post('/login',usercontroller.loginuser)

module.exports= router