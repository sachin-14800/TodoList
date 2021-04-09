const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);
router.use(urlencoded());

const Task=require('../models/task');

router.use('/task',require('./task'));
router.use('/favourite',require('./favourite'));


module.exports=router;