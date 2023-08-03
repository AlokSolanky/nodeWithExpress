const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.get("/login",(req,res,next)=>
{
    res.send(
      `<form method="POST" action="/" onsubmit="localStorage.setItem('user',document.getElementById('user').value)"><input name = "username" id="user" type="text"><button type="submit">Login</button></form>`
    );
})
app.get("/",(req,res,next)=>
{
    let data = fs.readFileSync("messages.txt","utf-8");
    if(!data)
    {
        data = "No Messages Yet";
    }
    console.log(data);
    res.send(
      `<p>${data} <br> <form method="POST" action="/" onsubmit="document.getElementById('user').value = localStorage.getItem('user')"><input name = "message" type"text"><input name="user" type="hidden" id="user"><button type="submit">Send</button></form>`
    );
})
app.post("/",(req,res,next)=>
{
    console.log(req.body)
    fs.appendFileSync("messages.txt", `${req.body.user} : ${req.body.message} \n`);
    res.redirect("/");
})
app.listen(4000);