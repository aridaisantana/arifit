const express = require('express');
const Usuario = require('../models/usuario');
const app = express();

app.get('/getUsers', function(req, res) {
    
    console.log("is working");
    Usuario.find({}).then(function (users) {
        res.send(users);
    });

});

module.exports = app;