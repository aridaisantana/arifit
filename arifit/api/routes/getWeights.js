const express = require('express');
const Usuario = require('../models/usuario');
const app = express();

app.post('/getWeights', function(req, res) {
    
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
            weights: user.weights,
            ok: true
        })

    })

});

module.exports = app;