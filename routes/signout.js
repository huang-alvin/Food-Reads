var express = require("express");
var router = express.Router();

const { logoutUser } = require('../auth');

router.post('/', (req, res) => {
    logoutUser(req, res);
    res.redirect('/login');
});


module.exports = router;
