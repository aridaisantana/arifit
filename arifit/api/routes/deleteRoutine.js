const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('../models/usuario');
const app = express();

app.post('/deleteRoutine', function (req, res) {  
    console.log("-----------------------------------------")
    let body = req.body;
    let { userId, routineId } = body;
    let userIdObjectId = new mongoose.Types.ObjectId(userId);
    let routineIdObjectId = new mongoose.Types.ObjectId(routineId);
    console.log(userIdObjectId, routineIdObjectId);
    

    Usuario.findOneAndUpdate({ _id: userIdObjectId }, { "$pull": { "training": { "_id": routineIdObjectId } }}, { safe: true}, function(err, obj) {
        if(err){
            console.log("Error al eliminar una rutina" + err);
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