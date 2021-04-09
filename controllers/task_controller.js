//importing the database model from models/task.js
const Task = require("../models/task");

//function for filling the new task deatils
module.exports.newTask=function(req,res){
    return res.render('new_task',{
        pageTitle:'Add a new task',
        title:'Add a new task'
    });
};

//Callback function for creating a new task
module.exports.createTask=function(req,res){
    //query for creating a new task
    Task.create({
        name:req.body.name,
        category:req.body.category,
        date:req.body.date,
        details:req.body.details
    },function(err,newTask){
        if(err)
        {
            //Error Handler
            console.log("task not created");
            return;
        }
        return res.redirect('/');
    });
};


//Callback function for deleting a task
module.exports.deleteTask=function(req,res){
    let id=req.query.id;
    //query for finding a task by id and deleting it as well
    Task.findByIdAndDelete(id,function(err){
        if(err)
        {
            //Error Handler
            console.log("Unable to delete the task");
            return;
        }
        return res.redirect('back');
    });
};


//Callback function for getting all the scheduled tasks
module.exports.allTask=function(req,res){
    //query for selecting all 
    Task.find({},function(err,tasks){
        if(err)
        {
            //Error Handler
            console.log("Error finding the data");
            return;
        }
        return res.render('task',{
            title: 'All tasks',
            task_list:tasks,
            msg:"No Tasks found. Click on add button to create one."
        });
    });
};

//Getting today's date
var dateTime=new Date();
dateTime=dateTime.toISOString().slice(0,10);

//callback function for getting all the future planned tasks
module.exports.upcomingTask=function(req,res){
    //query to find all the task whose date is greater than($gt) current date
    Task.find({date:{$gt:dateTime}},function(err,tasks){
        if(err)
        {
            //Error Handler
            console.log("Error finding the data");
            return;
        }
        return res.render('task',{
            title: 'Upcoming tasks',
            task_list:tasks,
            msg:"No tasks are Scheduled for future."
        });
    });
};


//Callback function for getting the pending tasks of past
module.exports.pendingTask=function(req,res){
    //query to find all those tasks that are scheduled in past or has date less than($lt) current date
    Task.find({date:{$lt:dateTime}},function(err,tasks){
        if(err)
        {
            //Error Handler
            console.log("Error finding the data");
            return;
        }
        return res.render('task',{
            title: 'Pending tasks',
            task_list:tasks,
            msg:"Congratulations!! You don't have any pending tasks."
        });
    });
};