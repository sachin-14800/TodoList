const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/task_information');

const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log("Successfully Connected to  database");
})

module.exports=db;