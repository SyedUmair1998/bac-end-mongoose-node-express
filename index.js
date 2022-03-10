const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


require('dotenv').config();
const connection = require('./connection');
const userController = require('./controller/user');

app.use("/user",userController)


connection(); //Connecting with mongoDB 


app.listen(process.env.port,()=>{
  console.log("Port running at ",process.env.port);
})