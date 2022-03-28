const express = require('express');
const router = express.Router();
const suppliersRouter = require('./suppliers')

router.get('/', function(req, res, next) {
  res.send("Warehouse API")
});

router.use('/suppliers', suppliersRouter);

console.log("Running warehouse/index");

module.exports = router;
