const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const { catchErrors } = require('../handlers/errorHandlers')

// Home page route
//Pug is a popular html templating language that used to be called Jade. Its often used by Node developers


router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', authController.isLoggedIn, storeController.addStore);
// since the createStore method uses async await we have to wrap it with a higher order function which catches any errors if the post is unsucessfull
// this way we don't have to add try catch blogs to each controller method.

router.post('/add',
storeController.upload,
catchErrors(storeController.resize),
catchErrors(storeController.createStore));

router.post('/add/:id',
storeController.upload,
catchErrors(storeController.resize),
catchErrors(storeController.updateStore));

router.get('/stores/:id/edit', catchErrors(storeController.editStore));
router.get('/store/:slug', catchErrors(storeController.getStoreBySlug))
router.get('/tags', catchErrors(storeController.getStoresByTag))
router.get('/tags/:tag', catchErrors(storeController.getStoresByTag))

router.get('/login', userController.loginForm)
router.post('/login', authController.login)
router.get('/logout', authController.logout);
router.get('/register',userController.registerForm);




router.post('/register',
// 1. Validate Registration data.
userController.validateRegister,
// 2. register the user.
userController.register,
// 3. log them in
authController.login
);

module.exports = router;
