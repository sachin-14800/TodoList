//importing the mongoose module for connection to MongoDB
const mongoose=require('mongoose');

//connecting the server to the task_information database
mongoose.connect('mongodb://localhost/task_information');

//establishing the connection
const db=mongoose.connection;

//Error handler for running the database
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));


//check if connection is made successfully or not
db.once('open',function(){
    console.log("Successfully Connected to  database");
})

//exporting the database
module.exports=db;