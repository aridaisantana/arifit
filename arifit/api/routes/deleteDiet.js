const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('../models/usuario');
const app = express();

app.post('/deleteDiet', function (req, res) {  
    console.log("-----------------------------------------")
    let body = req.body;
    let { userId, dietId } = body;
    let userIdObjectId = new mongoose.Types.ObjectId(userId);
    let dietIdObjectId = new mongoose.Types.ObjectId(dietId);
    console.log(userIdObjectId, dietIdObjectId);
    

    Usuario.findOneAndUpdate({ _id: userIdObjectId }, { "$pull": { "diet": { "_id": dietIdObjectId } }}, { safe: true}, function(err, obj) {
        if(err){
            console.log("Error al eliminar una dieta" + err);
            res.send({
                ok:false
            })
        }

        res.send({
            ok:true
        })
    });
    
});

module.exports = app;