const express = require('express');

const app = express();
app.use((req,res,next)=>
{
    console.log(`<h1>Hello world</h1>`);
    next();
})
app.use((req,res,next)=>
{
    res.send(`<h2> this is second middleware</h2>`);
})

app.listen(4000);