const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')

// Home page route
//Pug is a popular html templating language that used to be called Jade. Its often used by Node developers


router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
res.send(reverse);
});

module.exports = router;
