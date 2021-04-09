//importing the parser
const { urlencoded } = require('express');

//import express module
const express=require('express');

//creating router
const router=express.Router();

//using parser
router.use(urlencoded());

//import the task model 
const Task=require('../models/task');

//controller for callbacks
const taskControlller=require('../controllers/task_controller');

//route for /task/new i.e for navigating to fill form for task details
router.get('/new',taskControlller.newTask);

//route for /task/delete i.e for deleting the task
router.get('/delete',taskControlller.deleteTask);

//route for /task/create i.e for creating a new task
router.post('/create',taskControlller.createTask);

//route for /task/all i.e. for showing all the tasks
router.get('/all',taskControlller.allTask);

//route for /task/upcoming i.e for showing all future scheduled tasks
router.get('/upcoming',taskControlller.upcomingTask);

//route for /task/pending i.e for showing all the past scheduled tasks.
router.get('/pending',taskControlller.pendingTask);

//exporting the router
module.exports=router;