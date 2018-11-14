const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const request = require('request');

router.use(cookieParser());

router.get('/qr', (req, res) => {
    let viewModel = req.viewModel;
    res.render('sample.pug', viewModel);
});

router.get('/', (req, res) => {
    let merchantId = req.cookies['merchantId'];
    if(merchantId){
        request(`http://localhost:3001/api/${merchantId}`, function(error, response, body) {
            console.log('error', error);
            console.log('statusCode:', response && response.statusCode);

            // merchant data
            const merchant = body;
        })
        let viewModel = req.viewModel;
        res.render('index.pug', viewModel);
    }else{
        res.json({'cookies':'No cookies'});
    }
    
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