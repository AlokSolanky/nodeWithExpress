const express = require("express");
const { contactUs } = require("../controllers/extras");
const router = express.Router();

router.get("/contact", contactUs);

module.exports = router;
