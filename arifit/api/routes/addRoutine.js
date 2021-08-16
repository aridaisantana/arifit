const express = require('express');
const Usuario = require('../models/usuario');
const app = express();

app.post('/addRoutine', function (req, res) {  
    
    let body = req.body;
    let { email, routineLink } = body;
    console.log("Entro");
    console.log(email, routineLink);

    Usuario.findOneAndUpdate({email: email}, {$push:{training: {training: routineLink}}}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!" + err);
            res.send(
                {
                    ok:false,
                    error:err

                }
            )
        }

        console.log(doc);
        
        res.send({
            ok: true,
            doc: doc
        })
    });        

});

module.exports = app;