const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin@cluster0-rqy2g.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})
    .then(() => console.log('Connected..'))
    .catch(err => console.error('Connection failed', err));
module.exports = { mongoose }