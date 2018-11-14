const express = require('express');
const router = express.Router();

const request = require('request');

router.get('/qr', (req, res) => {
    let viewModel = req.viewModel;
    res.render('sample.pug', viewModel);
});

router.get('/', (req, res) => {
    let viewModel = req.viewModel;
    res.render('index.pug', viewModel);

});

router.get('/login', (req, res) => {
    res.cookie('merchantId', 1000000000, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
    res.redirect('/')
})

router.get('/logout', (req, res) => {
    res.clearCookie('merchantId');
    res.redirect('/');
})


module.exports = router;