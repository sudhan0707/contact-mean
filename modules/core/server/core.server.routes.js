/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 6/19/2016
 */
'use strict';
var controller = require('./core.server.controller');
module.exports = function(app){
    app
        .route('/')
            .get(controller.getContacts)
            .post(controller.createContact);

    app
        .route('/contact/:contactID')
            .get(controller.getContactById)
            .delete(controller.deleteContactById);
}
