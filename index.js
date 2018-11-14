const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const port = 3000;

const indexRouter = require('./server/router/indexRouter');
const merchantRouter = require('./server/router/merchantRouter');
const transactionRouter = require('./server/router/transactionRouter');
const historyRouter = require('./server/router/historyRouter');
const refundRouter = require('./server/router/refundRouter');

const showPayment = require('./server/api/showPayment');

const app = express();
app.use(cookieParser());

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use('/',(req, res, next) => {
   
    let merchantId = req.cookies['merchantId'];
    if(merchantId){
        next();
    }else if(req.path === '/login'){
        next();
    }
    else{
        res.json({'cookies':'No cookies'});
    }
})

app.use('/', indexRouter);
app.use('/merchant', merchantRouter);
app.use('/transaction', transactionRouter);
app.use('/history', historyRouter);
app.use('/refund', refundRouter);

app.use('/api', showPayment);

app.listen(port, (err) => {
    if(err) {
        return console.error(err); 
    }
    console.log(`Listening to ${port}...`);
});

