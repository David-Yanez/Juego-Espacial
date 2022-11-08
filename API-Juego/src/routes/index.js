
const usuarioRouter = require('./usuario.router');
const puntajeRouter = require('./puntaje.router');
const loginRouter = require('./login.router');
const juegoRouter = require('./juego.router');

function routerApi(app){
app.use('/usuario', usuarioRouter);
app.use('/puntaje', puntajeRouter);
app.use('/login', loginRouter);
app.use('/juego', juegoRouter);
}


module.exports = routerApi;