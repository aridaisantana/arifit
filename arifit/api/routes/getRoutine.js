const express = require('express');
const Usuario = require('../models/usuario');
const app = express();

app.post('/getRoutines', function(req, res) {
    
    let body = req.body;

    Usuario.findOne({email: body.email},
        (erro, user)=>{     
        
            if (erro) {
                return res.status(500).json({
                    ok: false,
                    err: erro
                })
            }
            
             if(!user){
                 console.log("no hay usuario");
             }
        
             console.log(user);
             
        res.json({
            training: user.training,
            ok: true
        })

    })

});

module.exports = app;