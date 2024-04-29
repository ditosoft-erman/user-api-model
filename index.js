const express =require('express')
    const app =express();
const rout=require("./routes/router")



app.listen(3001,()=>{
    console.log('server is running ');
})

app.use(rout)   