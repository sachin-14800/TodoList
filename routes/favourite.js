const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
router.use(urlencoded());

const Task=require('../models/task');

const favouriteController=require('../controllers/favourite_controller');


router.get('/',favouriteController.favourite);
router.get('/add',favouriteController.addFavourite);
router.get('/remove',favouriteController.removeFavourite);


module.exports=router;