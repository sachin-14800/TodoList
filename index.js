const cool=require('cool-ascii-faces');
//importing the express module for the server
const express=require('express');

//building the express app
const app=express();

//setting the port number on which the server will run
const port=process.env.PORT || 5000;

//importing the database module for connection to the database
const db=require('./config/mongoose');
// Setting up the view engine
app.set('view engine','ejs');

// Setting the path for all view related files
app.set('views','./views');

// setting the path for all the static files
app.use(express.static('./assests'));
app.get('/cool',(req,res)=>{res.send(cool())});
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