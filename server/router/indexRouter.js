const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

router.use(cookieParser());

router.get('/', (req, res) => {
    if(req.cookies['merchantId']){
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