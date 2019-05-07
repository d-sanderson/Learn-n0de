const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')

// Home page route
//Pug is a popular html templating language that used to be called Jade. Its often used with Node

router.get('/', (req,res) => {
  res.render('hello', {
    name: 'David',
    dog: req.query.dog
  });
});


// router.get('/', storeController.homePage)

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
res.send(reverse);
});

module.exports = router;
