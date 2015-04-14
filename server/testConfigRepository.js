
/* global module: false, require: false */

/* This module provides the middleware for the configService api calls to /appConfig/ */

(function(module) {
    'use strict';

    function ConfigRepository() {
    }
    ConfigRepository.prototype.getConfig = function(configKey) {
        return {
            id: configKey,
            description: "Example config",
            include: [],
            settings: {
                itWorks: true
            }
        };
    };

    module.exports = new ConfigRepository();
})(module);
