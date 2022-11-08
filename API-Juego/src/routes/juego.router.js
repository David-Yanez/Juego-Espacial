const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');
require("dotenv").config();


router.get('/', 
passport.authenticate('jwt', {session: false}),
(req, res )=>{
    res.send("hola");
    /*const filterJuego = req.query.juego || null;
    puntajeService.getPuntajes(filterJuego)
    .then((puntajeList) =>{
        response.success(req, res, puntajeList, 200);
    })
    .catch (e =>{
        response.error(req, res, 'Unexpected Error', 500, e );
    })*/
    });


    module.exports = router;