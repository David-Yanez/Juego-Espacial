const usuarioModel = require('./usuario.schema');
const bcrypt = require('bcryptjs');


async function adduser(user){
//list.push(user);
const hash = await bcrypt.hash(user.password, 10);
user.password = hash;
const usuario = new usuarioModel(user);
usuario.save();
}

async function getUsers(filterUsers){
    let filter = {};
    if (filterUsers !== null){
        filter = {usuario: filterUsers};
    }
const usuarios = await usuarioModel.find(filter);
return usuarios;
}

async function actualizarUsuario(id, pass){
    const user = await usuarioModel.findById(id);
/*const user = await usuarioModel.findOne({
    _id: id
});*/
const hash = await bcrypt.hash(pass, 10);
user.password = hash;
user.recuperar ="";
const newUser = await user.save();
return newUser;
}

async function actualizarWins(id, win){
    const user = await usuarioModel.findById(id);
    user.wins = win;
    const newUser = await user.save();
    return newUser;
}

async function actualizarToken(id, token){
    const user = await usuarioModel.findById(id);
    user.recuperar = token;
    const newUser = await user.save();
    return newUser;
}


    module.exports = {add: adduser, list: getUsers, update: actualizarUsuario, updateWin: actualizarWins, updateToken: actualizarToken}