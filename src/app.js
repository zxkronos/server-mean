const express = require('express');
const morgan = require('morgan');
const { dbConnection } = require('./datebase');
const cors = require('cors');

const app = express();

// app.set('port',4000);

app.use(morgan('dev'));
app.use(express.json()); //para entienda los objetos json
app.use(express.urlencoded({extended: false})); //para entender los datos en forma de html
app.use( cors() );

app.use("/api/employees",require('./routes/employees.routes'));
module.exports = app;