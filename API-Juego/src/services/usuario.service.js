const store = require('../models/usuario.store');
const usuarioModel = require('./../models/usuario.schema');

function cearUsuario (usuario){
  return new Promise((resolve, reject) => {
if (!usuario){
  console.error('no hay usuario');
   reject('datos incorrectos');
   return false;
}
store.add(usuario);
resolve(usuario);
  });
 
}

function getUsuarios(filterUsers){
  return new Promise((resolve, reject) =>{
resolve(store.list(filterUsers));
  });
}

 function actualizarUsuario(id, txt){
  return new Promise( async(resolve, reject) =>{
    if (!id || !txt){
      reject('Invalid data');
      return false;
    }
   const result = await store.update(id, txt);
   resolve(result);
  })

}

async function getUserByname(nombre) {
  const user = await usuarioModel.findOne({
    usuario: nombre
});
  //const us = await usuarioModel.usuario.find(user);
//  console.log(usuario);
  return user;
}


module.exports = {cearUsuario, getUsuarios, actualizarUsuario, getUserByname};

/*const boom = require('@hapi/boom');

/*class UsuariosService {
    constructor(){}

    async crear(data) {
        return data;
      }
    
      async buscarTodos() {
        return [];
      }
    
      async buscarUno(id) {
        return { id };
      }
    
      async actualizar(id, changes) {
        return {
          id,
          changes,
        };
      }
    
    
}*/
/*class UsuariosService {
constructor(){
    this.usuarios = [];
}

async crear(data){
    const nuevoUsuario = {
... data
    }
    thia.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
}

async buscarTodos(){
return this.usuarios;
}

async BuscarUno(id){
const usuario =  this.usuarios.buscarTodos(item => item.id === id);
if (!usuario){
    throw boom.notFound('User not found');
}
return usuario;
}

async actualizar(id, changes){
const index = this.usuarios.findIndex(item => item.id === id)
if (index === -1){
    throw boom.notFound('User not found');
}
const usuario = this.usuarios[index];
this.usuarios[index] = {
    ...usuario,
    ...changes
};
return this.usuarios[index]; 
}
}

module.exports = UsuariosService;*/