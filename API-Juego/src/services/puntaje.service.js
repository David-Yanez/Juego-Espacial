const { json } = require('body-parser');
const store = require('./../models/puntaje.store');

function crearPuntaje (puntaje){
    return new Promise((resolve, reject) => {
        if (!puntaje){
            console.error('no hay  puntaje');
             reject('datos incorrectos');
             return false;
        }

        const fecha =  {fecha: new Date() };
       
        let full = Object.assign(puntaje, fecha);
       // const fullPuntaje = jsonConcat(puntaje, fecha);
store.addPuntajee(full);
          resolve(full);
        /*  store.addPuntajee(puntaje);
          resolve(puntaje);*/
    });
   }


   function getPuntajes(filterJuego){
    return new Promise((resolve, reject) =>{
  resolve(store.listPuntajess(filterJuego));
    });
  }

   module.exports = {crearPuntaje, getPuntajes};