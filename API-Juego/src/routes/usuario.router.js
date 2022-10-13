
const response = require('./../middlewares/response');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const usuarioService = require('./../services/usuario.service');

//console.log('haaaa');
router.get('/', 
passport.authenticate('jwt', {session: false}),
(req, res )=>{
    const filterUsers = req.query.usuario || null;
    usuarioService.getUsuarios(filterUsers)
    .then((usuariosList) =>{
        response.success(req, res, usuariosList, 200);
    })
    .catch (e =>{
        response.error(req, res, 'Unexpected Error', 500, e );
    })
    });

    router.post('/', (req, res )=>{
       usuarioService.cearUsuario(req.body);
       
       if (req.query.error == "ok"){
        response.error(req, res, 'Erorr inesperado', 500, 'simulacion' );
       }else{
        response.success(req, res, 'creado correctamente',201);
      //  res.json(usuarios);
       }
        });

  router.patch('/:id', (req, res) =>{
    usuarioService.actualizarUsuario(req.params.id, req.body.password)
    .then((data)=> {
        response.success(req, res, data, 200);
    })
    .catch(e =>{
        response.error(req, res, 'Error interno', 500, e);
    });

  }) ;
module.exports = router;

/*const UsuariosService = require('./../services/usuario.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {crearUsuarioSchema, actualizarUsuarioSchema, getUsuarioSchema} = require('./../schemas/usuario.schema');
const usuarioModelo = require('./../schemas/usuario.schema');

const { route } = require('./login.route');
//const { route } = require('./login.route');
const router = express.Router();
const service = new UsuariosService();

router.get('/', async (req, res )=>{
const usuarios = await service.buscarTodos();
res.json(usuarios);
});

router.get('/:id',
validatorHandler(getUsuarioSchema, 'params'),
async (req, res, next)=>{
try {
    const {id}= req.params;
const usuario = await service.BuscarUno(id);
res.json(usuario);
} catch (error) {
    next(error);
}
});

router.post('/', 
validatorHandler(usuarioModelo, 'body'),
async(req, res, next)=>{
    try{
    const body = req.body;
    res.nuevoUsuario = await service.crear(body);
res.status(201).json(nuevoUsuario);
    }catch (error){
        next(error);
    }
});

router.post('/1', 
validatorHandler(crearUsuarioSchema, 'body'),
async(req, res, next)=>{
    try{
    const body = req.body;
    res.nuevoUsuario = await service.crear(body);
res.status(201).json(nuevoUsuario);
    }catch (error){
        next(error);
    }
});

router.patch('/:id', 
validatorHandler(getUsuarioSchema, 'params'),
validatorHandler(actualizarUsuarioSchema, 'body'),
async(req, res, next)=>{
    try{
        const {id} = req.params;
        const body = req.body;
        const usuario = await service.actualizar(id, body);
        res.json(usuario);
    } catch (error){
next(error);
    }

});
module.exports = router;*/