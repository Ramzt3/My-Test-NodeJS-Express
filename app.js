const express = require('express');
// const chalk = require('chalk'); // change color, but it's bug right now
const debug = require('debug')('app'); // cmd => set DEBUG=* & node app.js
const morgan = require('morgan'); // check info of incomming request
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req,res) => {
    res.send('Hello lol luu no');
});

app.listen(port, () => {
    debug('Listening on port: ' + port);
});