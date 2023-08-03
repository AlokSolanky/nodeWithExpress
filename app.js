const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoute);
app.use(shopRoute);
app.use((req,res)=>
{
    res.status(404).send(`404 ---- Page Not Found`);
})
app.listen(4000);