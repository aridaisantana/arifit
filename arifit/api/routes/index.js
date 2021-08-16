const express = require('express');
const app = express();
app.use(require('./login'));
app.use(require('./register'));
app.use(require('./addWeights'));
app.use(require('./getWeights'));
app.use(require('./getUsers'));
app.use(require('./addRoutine'));
app.use(require('./addDiet'));
app.use(require('./deleteRoutine'));
app.use(require('./deleteDiet'));
app.use(require('./getRoutine'));

module.exports = app;