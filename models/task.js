const mongoose=require('mongoose');

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
        default:false
    }
});
const Task=mongoose.model('task',taskSchema);
module.exports=Task;