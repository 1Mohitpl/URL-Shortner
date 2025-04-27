const express = require("express");
const { generateshortURL } = require("../Controllers/url");
const router = express.Router();



router.post("/", generateshortURL);


module.exports = router;