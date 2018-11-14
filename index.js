const express = require('express');
const path = require('path');
const port = 3000;

const indexRouter = require('./server/router/indexRouter');
const merchantRouter = require('./server/router/merchantRouter');
const transactionRouter = require('./server/router/transactionRouter');
const refundRouter = require('./server/router/refundRouter');
const summaryRouter = require('./server/router/summaryRouter');
const settleRouter = require('./server/router/settleRouter');


const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/merchant', merchantRouter);
app.use('/transaction', transactionRouter);
app.use('/refund', refundRouter);
app.use('/summary', summaryRouter);
app.use('/settlement', settleRouter);

app.listen(port, (err) => {
    if(err) {
        return console.error(err); 
    }
    console.log(`Listening to ${port}...`);
});
