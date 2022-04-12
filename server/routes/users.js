const axios = require('axios');
const express = require('express');
const router = express.Router();
const jwtCheck = require('../security/jwtCheck')

const usersServiceUrl = "http://localhost:8081/users/"

router.get('/', jwtCheck, async function(req, res, next) {
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

router.get('/:userId', jwtCheck, async function(req, res, next) {
    axios.get(usersServiceUrl + req.params.userId, {
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


module.exports = router;
