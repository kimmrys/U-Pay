const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

const request = require('request');

router.use(cookieParser());

router.get('/showPayment', (req, res) => {
   

    request(`http://localhost:3001/bank`, function(error, response, body) {
          
            let payment = JSON.parse(body);
            payment.merchantId = req.cookies['merchantId'];
            payment = [payment.address,payment.merchantId]
            res.send(payment);
    });

});

module.exports = router;