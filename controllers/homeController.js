const router = require('express').Router();

const isAuth = require('../middlewares/isAuth');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/secret-action', isAuth, (req, res) => {
    res.send('Super secret');
});

module.exports = router;