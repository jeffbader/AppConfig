/* global module: false, require: false */

/*
This module provides the ConfigService which is responsible for loading the requested configuration.  The ConfigService
contains the logic for merging included configuration documents specified in the raw config file to generate
the computed configuration.

While the ConfigService contains the logic for generating the computed configure, it does not know where or how
the configuration files are stored.  That is the responsibility of the configRepository.
*/

(function(module) {
    'use strict';
    function ConfigService(){

    }
    ConfigService.prototype.setRepository = function(configRepository){
        this.configRepository = configRepository;
    };

    ConfigService.prototype.getConfig = function(configKey){
        var config = this.configRepository.getConfig(configKey);

        // TODO: load and merge any included configuration files.
        config.sources = [configKey];
        return config;
    };

    ConfigService.prototype.getRawConfig = function(configKey){
        return this.configRepository.getConfig(configKey);
    };

    module.exports = new ConfigService();
})(module);