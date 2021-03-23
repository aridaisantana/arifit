require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

let renderLogin = path.resolve(__dirname, '../public/login.html');

app.get('/login', function (req, res) {    
    res.sendFile(renderLogin);
})

let renderRegister = path.resolve(__dirname, '../public/register.html');

app.get('/register', function (req, res) {    
    res.sendFile(renderRegister);
})

const connection = "mongodb+srv://arifit:donocreditos1.@cluster0.r2veq.mongodb.net/arifit?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

app.listen(process.env.PORT, ()=> {
    console.log("Escuchando en puerto 3000");
})