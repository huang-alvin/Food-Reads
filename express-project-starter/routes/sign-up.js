var express = require('express');
var router = express.Router();
const check = require('express-validator');
const { User } = require('../models');
const { asyncHandler, handleValidationErrors } = require('../utils');
const bcrypt = require('bcryptjs');

const userValidator = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name'),
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an email')
        .isEmail()
        .withMessage('Please provide a valid email'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid password')
];


router.get('/', function(req, res, next) {
    res.render('sign-up');
});

router.post('/sign-up', userValidator, handleValidationErrors, asyncHandler( async (req, res, next) => {
    const {
        name,
        email,
        password
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = User.create({
        name, email, hashedPassword
    });


}))

module.exports = router;
