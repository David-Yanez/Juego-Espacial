const response = require('./../middlewares/response');
const express = require('express');
const router = express.Router();
const puntajeService = require('./../services/puntaje.service');

router.get('/', (req, res )=>{
    const filterJuego = req.query.juego || null;
    puntajeService.getPuntajes(filterJuego)
    .then((puntajeList) =>{
        response.success(req, res, puntajeList, 200);
    })
    .catch (e =>{
        response.error(req, res, 'Unexpected Error', 500, e );
    })
    });




router.post('/',(req, res)=>{
    
    puntajeService.crearPuntaje(req.body);
    
    if (req.query.error == "ok"){
        response.error(req, res, 'Erorr inesperado', 500, 'simulacion' );
       }else{
        response.success(req, res, 'creado correctamente',201);
      //  res.json(usuarios);
       }
    });

module.exports = router;