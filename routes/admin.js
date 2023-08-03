const express = require('express');

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    `<form method="POST" action="add-products"><input name = "btn_val" type"text"><br><input name="size" type="number"><button type="submit">Add</button></form>`
  );
});
router.post("/add-products", (req, res, next) => {
  console.log(req.body.btn_val);
  console.log(req.body.size);
  res.redirect("/");
});

module.exports = router;