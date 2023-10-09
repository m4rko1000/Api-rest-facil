const express = require('express');
const app = express();

// Middlewares
app.use(express.json());
//app.use(express.urlencoded({extends: false}));

// routes 
app.use(require('./routes/index'));

app.listen (4000);
console.log('server on port 4000');



