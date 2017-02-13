var express = require('express');
var app     = express();
var load    = require('express-load');

load('controllers', {cwd: 'app'})
    .then('routes')
    .into(app);

var port = (process.env.PORT || 3000);

app.listen(port, function() {
    console.log('api running port '+ port);
});

module.exports = app;