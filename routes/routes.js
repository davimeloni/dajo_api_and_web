var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
const jwt = require('jsonwebtoken');
var config = require('../config/config');
var User = require('../models/user');
//Set router
var router = express.Router();
router.use(bodyParser.json());

//Routes controllers
var itemController = require('../controllers/item-controller');
var categoryController = require('../controllers/category-controller');
var accountController = require('../controllers/account-controller');
var userController = require('../controllers/user-controller');
var verify = require('../config/verify');

//------------------------------------------------------------------------------------
router
    .route('/verifyToken')
    .get(verify.verifyOrdinaryUser);

//item
//methods
router
    .route('/item')
    .get(verify.verifyOrdinaryUser, itemController.getAllItens)
    .post(itemController.createItem);

router
    .route('/activeitens')
    .get(itemController.getActiveItens);

router
    .route('/item/:itemId')
    .put(itemController.updateItem)
    .delete(itemController.deleteItem);

//category
//methods
router
    .route('/category')
    .get(categoryController.getAllCategories);


//account
//create account
router
    .route('/account')
    .post(accountController.createAccount)
    .get(verify.verifyOrdinaryUser, accountController.getAllAccounts);


router
    .route('/lastaccount')
    .get(accountController.getLastAccount);

//router
//   .route('/getAccountToMenu/:accountId')
//  .get(accountController.getAccountToMenu);

//get account or update by its id
router
    .route('/account/:accountId')
    .get(accountController.getAccount)
    .put(accountController.updateAccount);

//add item to account
router
    .route('/account/:accountId/additem')
    .put(accountController.addItemAccount);

//all itens in account
router
    .route('/account/:accountId/updateitens')
    .put(accountController.updateItensAccount);

//specific item in account
router
    .route('/account/:accountId/deleteitem/:itemId/')
    .put(accountController.deleteItemAccount);

//get itens by status
router
    .route('/accountstatus')
    .get(accountController.getItensAccountsNotClosed);

//get accounts with itens in the kitchen
router
    .route('/accountskitchen')
    .get(verify.verifyOrdinaryUser, accountController.getAccountsToKitchen);

// -------------------USER---------------------------------
//user
router
    .route('/user/:email')
    .get(userController.getUserByEmail);

router
    .route('/user')
    .post(userController.createCustomer);

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        email: req.body.email,
        username: req.body.username.toLowerCase(),
        password: req.body.password,
        name: req.body.name,
        kind: req.body.kind
    });

    userController.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Falha ao registrar, usuario ou e-mail ja existem' });
        } else {
            passport.authenticate('local')(req, res, function () {
                res.json({ success: true, msg: 'Registrado com sucesso, agora você pode logar' });
            });
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username.toLowerCase();
    const password = req.body.password;

    userController.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

        if (password == user.password) {

            var token = verify.getToken(user);
            res.status(200).json({
                status: 'Login successful!',
                success: true,
                token: token,
                user: user
            });

        } else {
            return res.json({ success: false, msg: 'Wrong password' });
        }

    });
});


module.exports = router;
