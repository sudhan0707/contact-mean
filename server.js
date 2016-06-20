/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 6/19/2016
 */

'use strict';

var express = require('./config/express');

var app = express.init();

app.listen('8090', function(error){
    if(error){
        console.log('Error: while starting server on port 8090');
    } else{
        console.log('Application started and running on port 8090');
    }
})