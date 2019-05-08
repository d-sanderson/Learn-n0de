const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')
const { catchErrors } = require('../handlers/errorHandlers')

// Home page route
//Pug is a popular html templating language that used to be called Jade. Its often used by Node developers


router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);
// since the createStore method uses async await we have to wrap it with a higher order function which catches any errors if the post is unsucessfull
// this way we don't have to add try catch blogs to each controller method. 
router.post('/add', catchErrors(storeController.createStore));

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
res.send(reverse);
});

module.exports = router;
