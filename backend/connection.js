const mongoose = require('mongoose');

const url = 'mongodb+srv://mongoanmol:mongo2412@cluster0.egfblf0.mongodb.net/mydatabase?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database conected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;
