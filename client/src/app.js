const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send("Hello world from the server")
})

app.listen(3001, ()=>{
    console.log(`server is running`)
})