const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Colony', {
    useNewUrlParser: true
})
    .then(() => console.log('Connected..'))
    .catch(err => console.error('Connection failed', err));
module.exports = { mongoose }