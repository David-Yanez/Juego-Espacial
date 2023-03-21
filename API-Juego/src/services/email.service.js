const boom = require('@hapi/boom');
const bcrypt = require('bcryptjs');
const UserService = require('./usuario.service');
const jwt = require('jsonwebtoken');

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
      const payload ={
            sub: user.id,
            name: user.usuario
        }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '15min'});
    const link =  process.env.LINK_FRON+`?token=${token}`;
    await UserService.actualizarToken(user.id, token);

    const  transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.PASS_EMAIL      
        }
      });
     await transporter.sendMail({
        from: 'juegoespacial.epn@gmail.com', // sender address
        to: `${user.correo}`, // list of receivers
        subject: "Email para recuperar Contaseña", // Subject line
       // text: "Hello world?", // plain text body
        html: `<body style="margin:0;padding:0;word-spacing:normal;background-color:#939297;">
        <div role="article" aria-roledescription="email" lang="es" style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#939297;">
          <table role="presentation" style="width:100%;border:none;border-spacing:0;">
            <tr>
              <td align="center" style="padding:0;">
                <!--[if mso]>
                <table role="presentation" align="center" style="width:600px;">
                <tr>
                <td>
                <![endif]-->
                <table role="presentation" style="width:94%;max-width:600px;border:none;border-spacing:0;text-align:left;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636;">
                  <tr>
                    <td style="padding:40px 30px 30px 30px;text-align:center;font-size:24px;font-weight:bold;">
                      <a  style="text-decoration:none;"><img src=${process.env.LINK_LOGO}  width="185" height="220" alt="Logo" style="width:165px;max-width:80%;height:auto;border:none;text-decoration:none;color:#ffffff;"></a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:30px;background-color:#ffffff;">
                      <h1 style="margin-top:0;margin-bottom:16px;font-size:26px;line-height:32px;font-weight:bold;letter-spacing:-0.02em;">Recuperación de Contraseña!</h1>
                      <p style="margin:0;">Hola <b>${user.usuario}</b> Si por algún motivo olvidaste o quieres cambiar tu contraseña, ingresa al siguiente link para poder cambiar 👇 <br><br>  ${link}  </p>
                    </td>
                  </tr>`
      });
return { message: 'mail send'};
}

async function cambiarPassword(token, newPassword){
    try {
const payload = jwt.verify(token, process.env.JWT_SECRET);
const user = await UserService.getUserByname(payload.name);
if(user.recuperar !== token){
    throw boom.unauthorized();
}
//const hash = await bcrypt.hash(data.password, 10);
await UserService.actualizarUsuario(user.id, newPassword);
return { massage: 'password cambiado'}
    } catch (error){
      throw boom.unauthorized();
    }
}


module.exports = { sendMail, cambiarPassword };