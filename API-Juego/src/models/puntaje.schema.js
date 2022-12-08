const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puntajeSchema = new Schema({
    jugador:  {type: String, required: true},
    juego:  {type: String, required: true},
    tiempo:  {type: Number, required: true},
    puntaje: {type: Number, required: true},
    estrellas: {type: Number, required: true},
    fecha: Date
});


const puntajeModel = mongoose.model('Puntajes', puntajeSchema);
module.exports = puntajeModel;