const express = require('express');
const PORT = 3000;

const app = express();

// implementing API routing
// handling API incoming request 
app.use("/", (req, res)=>{
    res.send("Welcome to DevTinder Service App")
});


app.listen(PORT,()=>{
    console.log(`DevTinder serice running with port ${PORT}`)
});

