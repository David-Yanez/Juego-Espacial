const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    usuario: {type: String, required: true, unique: true},
    correo: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    wins: {type: Number, required: true},
    recuperar: {type: String}
});



const model = mongoose.model('Usuarios', usuarioSchema);
module.exports = model;
/*const Joi = require('joi');

const id = Joi.string().uuid();
const nombre = Joi.string().min(4).max(20);
const correo = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ec'] } });
const contrasena = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));

const crearUsuarioSchema = Joi.object({
    nombre: nombre.required(),
    correo: correo.required(),
    contrasena: contrasena.required(),
});

const actualizarUsuarioSchema = Joi.object({
    nombre: nombre,
    correo: correo,
    contrasena: contrasena.required(),
});


const getUsuarioSchema = Joi.object({
id: id.required(),
});*/

//module.exports = {crearUsuarioSchema, actualizarUsuarioSchema, getUsuarioSchema}