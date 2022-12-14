const boom = require('@hapi/boom');
const UserService = require('./usuario.service');

//const bcrypt = require('bcrypt');
const { update } = require('../models/usuario.store');
const nodemailer = require("nodemailer");
//const service = new UserService();



/*async getUser(email, password){
    const user = await UserService.getUserBycorreo(email);
    if(!user){
throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
        throw boom.unauthorized(); 
    }
  //  update.
    delete user.dataValues.password;
    return user;
}*/

async function sendMail(email){
    const user = await UserService.getUserBycorreo(email);
    if(!user){
throw boom.unauthorized();
    }
    const  transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth: {
            user: 'juegoespacial.epn@gmail.com',
            pass: 'juzjeonuutdxabqc'
        
        }
      });
     await transporter.sendMail({
        from: 'juegoespacial.epn@gmail.com', // sender address
        to: `${user.correo}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
return { message: 'mail send'};
}




module.exports = { sendMail };