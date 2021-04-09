//importing the database module for connection to the database
const db=require('./config/mongoose');

//importing the express module for the server
const express=require('express');

//building the express app
const app=express();

//setting the port number on which the server will run
const port=8000;

// Setting up the view engine
app.set('view engine','ejs');

// Setting the path for all view related files
app.set('views','./views');

// setting the path for all the static files
app.use(express.static('./assests'));

// setting the path for all the routes to different locations on server
app.use('/',require('./routes'));


// creating the express app
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Server is running at port number : ${port}`);
});