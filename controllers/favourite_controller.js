//importing the database model from models/task.js
const Task = require("../models/task");

//function for rendering all the favourite tasks
module.exports.favourite=function(req,res){
    //query for getting all those tasks which are favourite or whose favourite field is set true
    Task.find({favourite:true},function(err,tasks){
        
        if(err)
        {
            //Error Handler
            console.log("Error finding the data");
            return;
        }
        return res.render('task',{
            title: 'Favourites',
            task_list:tasks,
            msg:"No tasks are added to favourite."
        });
    });
};


//function for add a task to favourites
module.exports.addFavourite=function(req,res){
    let id=req.query.id;
    //query for updating the favourite field to true i.e. now it is a favourite task for that particular task
    Task.updateOne({_id:id},{favourite:true},function(err,tasks){
       
        if(err)
        {
             //Error Handler
            console.log("Error finding the data");
            return;
        }
        //display the number of  changes in the table
        console.log("updated in :",tasks);
        return res.redirect('back');
    });
};


//function for removing the task from favourites
module.exports.removeFavourite=function(req,res){
    let id=req.query.id;
    //query for Updating the favourite field to false i.e. now it is not a favourite task
    Task.updateOne({_id:id},{favourite:false},function(err,tasks){
        
        if(err)
        {
            //Error Handler
            console.log("Error finding the data");
            return;
        }
        //display the number of  changes in the table
        console.log("updated in :",tasks);
        return res.redirect('back');
    });
};




