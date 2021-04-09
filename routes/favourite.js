//importing parser
const { urlencoded } = require('express');
//importing express module
const express=require('express');
//creating router
const router=express.Router();
//parser
router.use(urlencoded());

//importing the model
const Task=require('../models/task');

//creating a callback controller
const favouriteController=require('../controllers/favourite_controller');

//route to favourite tasks
router.get('/',favouriteController.favourite);

//route for adding a task to favourite
router.get('/add',favouriteController.addFavourite);

//route for removing a task from favourite
router.get('/remove',favouriteController.removeFavourite);

//exporting the router so can be used in other areas of project
module.exports=router;