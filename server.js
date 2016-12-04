/// <reference path="typings/index.d.ts"/>

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    //contentBase: __dirname,
    lazy: false,
    watchOptions: {
        aggregateTimeout: 30,
        poll: true
    },
    stats: {
        colors: true
    },
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/dist/*', function (req, res) {
    res.sendFile(path.join(__dirname, req.url));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, req.url));
});

app.listen(3333, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3333');
});
