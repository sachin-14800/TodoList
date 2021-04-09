//import parser module
const { urlencoded } = require('express');
//import express module
const express=require('express');

//creating router
const router=express.Router();

//creating a callback controller
const homeController=require('../controllers/home_controller');

//route for home page
router.get('/',homeController.home);
//using parser 
router.use(urlencoded());

//importing model of database
const Task=require('../models/task');

//route for /task/...
router.use('/task',require('./task'));

//route for /favourite/...
router.use('/favourite',require('./favourite'));

//exporting the router 
module.exports=router;