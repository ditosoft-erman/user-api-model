const express =require('express')
const mydb=require('./config/db')
const app =express();
const rout=require("./routes/router")

app.use(rout)

app.listen(3001,()=>{
    console.log('server is running ');
})