const express = require('express');
const path = require('path');
const router = require('./routes');

// Crear La app
const app = express();


//Habilitar Pug
app.set('view engine', 'pug');

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware Propios
app.use((req, res, next) => {
    res.locals.Año = new Date().getFullYear();
    next();
})


// Routing
app.use('/',router());

// Agregar el puerto
app.listen('3000',()=>{
    console.log('El servidor Se ejecuta correctamente')
})
