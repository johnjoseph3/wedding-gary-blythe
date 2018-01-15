const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 9000 : process.env.PORT;
const app = express();

require('./db').then((db) => require('./routes')(app, db))

if (isDeveloping) {
	console.log("In development mode");
}
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')));

var nocache = require('nocache');
app.use(nocache());

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});