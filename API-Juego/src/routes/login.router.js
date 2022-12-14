const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');
const service = require('../services/email.service');
require("dotenv").config();



router.post('/', passport.authenticate('local', {session: false}),
async (req, res, next )=>{
    try {
        const usuario = req.user;
        const payload ={
            sub: usuario.id,
            name: usuario.usuario
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        res.json({
            usuario,
            token
            });
    }catch (error){
        next(error);
    }

    });

    router.post('/recovery', 
async (req, res, next )=>{
    try {
        const { correo } = req.body;
        const rta = await service.sendMail(correo);
        res.json(rta);
    }catch (error){
        next(error);
    }

    });

    module.exports = router;