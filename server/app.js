/* global require: false, console: false */

(function(){
    'use strict';

    var express = require('express');
    var configServiceRouter = require('./configServiceRouter');
    var webServerPort = 1337;

    var app = express();
    app.use('/appConfig', configServiceRouter);
    app.listen(webServerPort);
    console.log('Listening at http://localhost:' + webServerPort + '/appConfig');

})();