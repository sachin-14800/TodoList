//importing the mongoose module for creating the schema for the table
const mongoose=require('mongoose');

//Creating schema
const taskSchema=new mongoose.Schema({
    name:{
        type:String,       
        required:true
    },
    category:{
        type:String
    },
    date:{
        type:Date,
        required:true
    },
    details:{
        type:String
    },
    favourite:{
        type:Boolean,
        default:false  //default a task is not favourite
    }
});
//creating the model
const Task=mongoose.model('task',taskSchema);
//exporting the model
module.exports=Task;