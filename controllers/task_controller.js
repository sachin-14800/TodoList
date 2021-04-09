const Task = require("../models/task");

module.exports.newTask=function(req,res){
    return res.render('new_task',{
        pageTitle:'Add a new task',
        title:'Add a new task'
    });
};

module.exports.createTask=function(req,res){
    Task.create({
        name:req.body.name,
        category:req.body.category,
        date:req.body.date,
        details:req.body.details
    },function(err,newTask){
        if(err)
        {
            console.log("task not created");
            return;
        }
        return res.redirect('/');
    });
};

module.exports.deleteTask=function(req,res){
    let id=req.query.id;
    Task.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log("Unable to delete the task");
            return;
        }
        return res.redirect('back');
    });
};

module.exports.allTask=function(req,res){
    Task.find({},function(err,tasks){
        if(err)
        {
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

var dateTime=new Date();
dateTime=dateTime.toISOString().slice(0,10);


module.exports.upcomingTask=function(req,res){
    Task.find({date:{$gt:dateTime}},function(err,tasks){
        if(err)
        {
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

module.exports.pendingTask=function(req,res){
    Task.find({date:{$lt:dateTime}},function(err,tasks){
        if(err)
        {
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