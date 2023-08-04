const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const path = require('path');

const root = require('./utils/path');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoute);
app.use(shopRoute);
app.get('/contact',(req,res)=>
{
    res.sendFile(path.join(root,'views','contactus.html'));
})
app.post('/success',(req,res)=>
{
    res.status(200).send("Form Submitted Successfull");
})
app.use((req,res)=>
{
    res.status(404).sendFile(path.join(root,'views','404.html'));
});

app.listen(4000);