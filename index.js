const express = require('express');
const app = express();
const port = 6000;

//import mongoose file for db
const db = require('./config/mongoose');

//middleware 
app.use(express.urlencoded())

//acquire routes folder to use routes 
app.use("/",require("./routes"))


app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`Server is Running on : ${port}`);
});