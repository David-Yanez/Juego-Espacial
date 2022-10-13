const express = require('express');
const routerApi = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const passport = require('passport');

require("dotenv").config();

//const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
db(process.env.MONGODB_URI);
const app = express();
app.use(bodyParser.json());
app.use(express.json());

/*const whitlist = ['http://localhost:8080', 'http://www...']
const options = {
    origin:(origin, callback) =>{
        if (whitlist.includes(origin) || !origin){
            callback(null, true);
        } else {
            callback(new Error('no tiene permiso'));
        }
    }
}*/
app.use(cors());
app.use(passport.initialize());
require('./Strategies');

app.set('port', process.env.PORT || 9000);






routerApi(app);

/*app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);*/


/*const router = express.Router();
app.use(router);

router.get('/', (req, res )=>{
    console.log('hola');
    res.send('hola');
    });*/

app.listen(app.get('port'), ()=>{
    console.log('Server Listen on port', app.get('port'));
});