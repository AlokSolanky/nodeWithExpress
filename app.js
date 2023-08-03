const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product', (req,res,next)=>
{
    res.send(
      `<form method="POST" action="products"><input name = "btn_val" type"text"><br><input name="size" type="number"><button type="submit">Add</button></form>`
    );

})
app.use("/products",(req,res,next)=>
{
    console.log(req.body.btn_val);
    console.log(req.body.size);
    res.redirect("/");
})
app.use("/", (req, res) => {
  res.send("Submitted");
});

app.listen(4000);