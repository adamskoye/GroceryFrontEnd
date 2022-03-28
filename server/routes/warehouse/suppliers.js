const axios = require('axios');
const express = require('express');
const router = express.Router();

const usersServiceUrl = "http://localhost:8080/suppliers/"

router.get('/', async function(req, res, next) {
      axios.get(usersServiceUrl, {
      })
      .then(function (response) {
        console.log(response.data);
        res.send(response.data)
      })
      .catch(function (error) {
        console.log(error)
        res.status(500)
        res.send()
      });
});

console.log("Running warehouse/suppliers");

module.exports = router;
