const {Strategy} = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcryptjs');

//const userService = require('./../services/usuario.service');
const {getUserByname} = require('./../services/usuario.service');
//const service = new userService();


const LocalStrategy = new Strategy(async(usuario, password, done) =>{
try {
   const user =  await getUserByname(usuario);
   console.log(user);
   if(!user){
    done(boom.unauthorized(), false);
   }
   console.log(password.length);
   console.log(user.password.length);
   const isMatch = await bcrypt.compare(password, user.password);
   console.log(isMatch);
   if (!isMatch){
    done(boom.unauthorized(), false);
   }
   done(null, user);
} catch (error) {
    done(error, false);
}
    
});

module.exports = LocalStrategy;