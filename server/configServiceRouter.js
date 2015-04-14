/* global module: false, require: false */

/* This module provides the middleware for the configService api calls to /appConfig/ */

(function(module) {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var configService = require('./configService');
    var configRepository = require('./testConfigRepository');

    configService.setRepository(configRepository);

    // middleware specific to this router
    router.get('/:configKey/raw', allowCrossDomain, onRawConfigRequest);
    router.get('/:configKey', allowCrossDomain, onConfigRequest);

    function allowCrossDomain(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

		// intercept OPTIONS method
		if ('OPTIONS' === req.method) {
		  res.send(200);
		}
		else {
		  next();
		}
	}

	function onConfigRequest(request, response) {
        var configKey = request.params.configKey;
        var config = configService.getConfig(configKey);
        sendJson(config, response);
    }

	function onRawConfigRequest(request, response) {
        var configKey = request.params.configKey;
        var rawConfig = configService.getRawConfig(configKey);
        sendJson(rawConfig, response);
    }

    function sendJson(retValue, response) {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(retValue));
    }

    module.exports = router;
})(module);