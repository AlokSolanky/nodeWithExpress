const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { LocalStorage } = require("node-localstorage");


const localStorage = new LocalStorage("./local-storage"); 

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.get("/login",(req,res,next)=>
{
    res.send(
      `<form method="POST" action="add-user"><input name = "username" type"text"><button type="submit">Login</button></form>`
    );
})
app.post("/add-user",(req,res,next)=>
{
    const name = req.body.username;
    localStorage.setItem("user",name);
    res.redirect("/");
})
app.get("/",(req,res,next)=>
{
    const data = fs.readFileSync("messages.txt");
    res.send(
      `<p>${data} <br> <form method="POST" action="add-msg"><input name = "message" type"text"><button type="submit">Send</button></form>`
    );
})
app.post("/add-msg",(req,res,next)=>
{
    const user = localStorage.getItem("user");
    const msg = req.body.message;

    fs.appendFileSync("messages.txt", `${user} : ${msg} \n`);
    res.redirect("/");
})
app.listen(4000);