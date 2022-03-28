const express = require('express');
const router = express.Router();
const warehouseRouter = require('./warehouse/index')

router.get('/', function(req, res, next) {
  console.log("API called")
  res.send('API');
});

router.use('/warehouse', warehouseRouter);

module.exports = router;
