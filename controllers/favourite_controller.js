const Task = require("../models/task");

module.exports.favourite=function(req,res){
    Task.find({favourite:true},function(err,tasks){
        if(err)
        {
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

module.exports.addFavourite=function(req,res){
    let id=req.query.id;
    Task.updateOne({_id:id},{favourite:true},function(err,tasks){
        if(err)
        {
            console.log("Error finding the data");
            return;
        }
        console.log("updated in :",tasks);
        return res.redirect('back');
    });
};

module.exports.removeFavourite=function(req,res){
    let id=req.query.id;
    Task.updateOne({_id:id},{favourite:false},function(err,tasks){
        if(err)
        {
            console.log("Error finding the data");
            return;
        }
        console.log("updated in :",tasks);
        return res.redirect('back');
    });
};




