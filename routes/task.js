const { urlencoded } = require('express');
const express=require('express');
const router=express.Router();
router.use(urlencoded());

const Task=require('../models/task');


const taskControlller=require('../controllers/task_controller');

router.get('/new',taskControlller.newTask);
router.get('/delete',taskControlller.deleteTask);
router.post('/create',taskControlller.createTask);
router.get('/all',taskControlller.allTask);

router.get('/upcoming',taskControlller.upcomingTask);
router.get('/pending',taskControlller.pendingTask);

module.exports=router;