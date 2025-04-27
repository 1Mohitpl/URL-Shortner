const mongoose = require('mongoose');

// creating schema
const urlschema = new mongoose.Schema({
    shortid : {
        type: String,
        required : true,
        unique : true
    },

     redirectURL : {
        type : String,
        required : true
     },

     clickHistory : [{
        timestamp :  {
            type : Number
        }
     }],

},
 {
     timestamp : true
});

const URL = mongoose.model('url', urlschema);

module.exports = URL;