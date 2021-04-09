//importing the database model from models/task.js
const Task = require("../models/task");

//getting today's date
var dateTime=new Date();
var Tdate=dateTime.toISOString().slice(0,10);

//function for getting all the tasks that are schedule for today
module.exports.home=function(req,res){
    //query for finding those tasks whose date matches Tdate i.e. current date.
    Task.find({date:Tdate},function(err,tasks){
        
        if(err)
        {
            //Error handler
            console.log("Error finding the data");
            return;
        }
        return res.render('home',{
            title: 'Today',
            task_list:tasks
        });
    });
    
};

