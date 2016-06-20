/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 6/19/2016
 */
'use strict';

var express = require('express'),
    bodyParser = require('body-parser');

module.exports.init = function(){

    var app = express();

    this.initializeBodyParser(app);
    this.initializeRoutes(app);

    return app;
};

module.exports.initializeRoutes = function(app){
    require('../modules/core/server/core.server.routes')(app);
};

module.exports.initializeBodyParser = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
};
