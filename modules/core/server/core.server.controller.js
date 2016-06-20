/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 6/19/2016
 */


var contacts = [];

module.exports.getContacts = function(req, res){
    console.log('Recevied Request');
    res.json(contacts);
};

module.exports.createContact = function(req,res){

    var contact = {};
    contact.id = Math.floor( Math.random() * (1000 -1) + 1 );
    contact.firsName = req.body.firstName || '';
    contact.lastName = req.body.lastName || '';
    contact.age = req.body.age || 0;

    contacts.push(contact);
    res.json({status: 'Successs'})
}

module.exports.getContactById = function(req, res){
    var id = req.params.contactID,
        currcontact;
    if(!id){
        res.json({status: 'error', message: "Unable to find contact by id"});
    }
    contacts.forEach(function(contact){
        if(contact.id == id){
            currcontact = contact;
            return;
        }
    });
    res.json(currcontact);
}