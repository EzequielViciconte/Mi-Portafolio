const express = require('express');
const router = express.Router();


// Importar Controladores
const homeController = require('../controllers/homeController');


module.exports = function (){
    //**---------------- Area Publica ----------------  */
    router.get('/',homeController.Home);

    return router;
}