const { Schema,model } = require('../connection');

const mySchema = new Schema({
     restroName: String,
     restroImage: String,
     foodItems: Array,
     name: String,
     email : String,
     phone: String,
     datetime: Date,
     table: String,
     persons: Number,
     createdAt: {type:Date,default:Date.now},     
});

module.exports = model('orders',mySchema)