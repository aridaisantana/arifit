const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {    
    values: ["BASIC", "PRO", "PREMIUM", "SYSADMIN"],
    message: '{VALUE} no es un rol válido'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "El correo es necesario"],
    },
    password: {
        type: String,
        required: [true, "Le contraseña es obligatoria"],
    },
    rol: {
        type: String,
        default: 'BASIC',
        required: [true],
        enum: rolesValidos
    },
    created: {
        type: Date,
        default: Date.now
    },
    weights: [ 
        {
            id: Schema.Types.ObjectId,
            weight : {type: Array}, 
            date : { type: Date, default: Date.now }
        }
    ],
    diet: [ 
        {
            id: Schema.Types.ObjectId,
            diet : {type: String}, 
            date : { type: Date, default: Date.now }
        }
    ],
    training: [ 
        {   
            id: Schema.Types.ObjectId,
            training : {type: String}, 
            date : { type: Date, default: Date.now }
        }
    ]
    
});

usuarioSchema.methods.toJSON = function() {   
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;   
    return userObject;
}

usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
})

module.exports = mongoose.model('Usuario', usuarioSchema);

