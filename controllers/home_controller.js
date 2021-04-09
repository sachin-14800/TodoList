const Task = require("../models/task");
var dateTime=new Date();
var Tdate=dateTime.toISOString().slice(0,10);
module.exports.home=function(req,res){
    Task.find({date:Tdate},function(err,tasks){
        if(err)
        {
            console.log("Error finding the data");
            return;
        }
        return res.render('home',{
            title: 'Today',
            task_list:tasks
        });
    });
    
};

