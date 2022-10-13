const puntajeModel = require('./puntaje.schema');


function addpuntaje(punt){
//list.push(user);
const puntaje = new puntajeModel(punt);
puntaje.save();
}

async function getPuntaje(filterJuego){
    let filter = {};
    if (filterJuego !== null){
        filter = {juego: filterJuego};
    }
const puntajes = await puntajeModel.find(filter);
return puntajes;
}



/*async function actualizarUsuario(id, txt){
const foundtxt = await usuarioModel.findOne({
    _id: id
});
foundtxt.password = txt;
const newtxt = await foundtxt.save();
return newtxt;
}*/

module.exports = {addPuntajee: addpuntaje, listPuntajess: getPuntaje}