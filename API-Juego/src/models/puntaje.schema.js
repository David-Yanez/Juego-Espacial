const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puntajeSchema = new Schema({
    jugador: String,
    juego: String,
    tiempo: Number,
    puntaje: Number,
    estrellas: Number,
    fecha: Date
});


const puntajeModel = mongoose.model('Puntajes', puntajeSchema);
module.exports = puntajeModel;