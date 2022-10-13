
const usuarioRouter = require('./usuario.router');
const puntajeRouter = require('./puntaje.router');
const loginRouter = require('./login.router');

function routerApi(app){
app.use('/usuario', usuarioRouter);
app.use('/puntaje', puntajeRouter);
app.use('/login', loginRouter);
}


module.exports = routerApi;