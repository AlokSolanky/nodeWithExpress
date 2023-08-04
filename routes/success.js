const express = require("express");
const { success } = require("../controllers/extras");
const router = express.Router();

router.post("/success", success);

module.exports = router;
