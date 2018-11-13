const express = require('express');
const path = require('path');
const port = 3000;

const indexRouter = require('./server/router/indexRouter');
const merchantRouter = require('./server/router/merchantRouter');

const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/merchant', merchantRouter);

app.listen(port, (err) => {
    if(err) {
        return console.error(err); 
    }
    console.log(`Listening to ${port}...`);
});