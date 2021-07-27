const express = require('express');
const Usuario = require('../models/usuario');
const app = express();

const getDate = () => {
    var date = new Date();
    var dateStr =
    ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
    ("00" + date.getDate()).slice(-2) + "/" +
    date.getFullYear() + " " +
    ("00" + date.getHours()).slice(-2) + ":" +
    ("00" + date.getMinutes()).slice(-2) + ":" +
    ("00" + date.getSeconds()).slice(-2);
}

app.post('/addWeights', function (req, res) {  
    
    let body = req.body;
    let { email, newWeight } = body;
    
    
    Usuario.findOneAndUpdate({email: email}, {$push:{weights: parseInt(newWeight)}}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }

        console.log(doc);
        
        res.send({
            ok: true,
            doc: doc
        })
    });        

});

module.exports = app;