require("dotenv").config();
const mongoose = require("mongoose");

// Coneccion a mongodb
mongoose.Promise = global.Promise;
async function connect(url){
   await  mongoose.connect(url, {
        useNewUrlParser: true,
    });
    console.log('[db] Conected');
}      

module.exports = connect;