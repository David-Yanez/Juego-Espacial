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

app.use(cors());
app.use(passport.initialize());
require('./Strategies');

app.set('port', process.env.PORT || 9000);

routerApi(app);

app.listen(app.get('port'), ()=>{
    console.log('Server Listen on port', app.get('port'));
});