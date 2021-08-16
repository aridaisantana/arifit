const express = require('express');
const Usuario = require('../models/usuario');
const app = express();

app.post('/addDiet', function (req, res) {  
    
    let body = req.body;
    let { email, dietLink } = body;
    console.log(email, dietLink);

    Usuario.findOneAndUpdate({email: email}, {$push:{diet: {diet: dietLink}}}, (err, doc) => {
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