const {Schema,model } = require('../connection');


// Defining the structure of data to store
const myschema = new Schema ({
    name :String,
    email : String,
    password : String,
});

module.exports = model('user',myschema);