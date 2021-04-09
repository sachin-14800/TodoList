const db=require('./config/mongoose');
const express=require('express');
const app=express();
const port=8000;
// const expressLayouts=require('express-ejs-layouts');
// app.use(expressLayouts);



app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('./assests'));

app.use('/',require('./routes'));

var dateTime=new Date();
console.log(dateTime.toISOString().slice(0,10));
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Server is running at port number : ${port}`);
});