const path = require('path');
exports.contactUs = (req,res,next)=>
{
    res.sendFile(path.join(__dirname,"..","views","contactus.html"));
}
exports.success = (req,res)=>
{
    console.log(req.body);
    res.redirect("/");
}