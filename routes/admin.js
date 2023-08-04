const express = require("express");
const path = require('path');

const root = require('../utils/path');

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(root,'views','add-product.html'));
});
router.post("/add-product", (req, res, next) => {
  console.log(req.body.product);
  res.redirect("/");
});

module.exports = router;
