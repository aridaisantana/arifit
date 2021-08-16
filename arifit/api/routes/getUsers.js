const express = require('express');
const Usuario = require('../models/usuario');
const app = express();

app.get('/getUsers', function(req, res) {
    
    Usuario.find({}).then(function (users) {
        res.send(users);
    });

});

module.exports = app;