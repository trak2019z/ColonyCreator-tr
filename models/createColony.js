const mongoose = require('mongoose');

//Schema
const createColonySchema = mongoose.Schema({
    colonyName:{
        type: String,
        required: true
    },
    colonyPlace:{
        type: String,
        required: true
    },
    participants:{
        type: Number,
        required: true
    },
    dayOfStart:{
        type: Date,
        required: true
    },
    dayOfEnd:{
        type: Date,
        required: true
    }
});

//const CreateColony = module.exports = mongoose.model('CreateColony', createColonySchema);
const CreateColony = module.exports = mongoose.model("colony", createColonySchema);
//Add colony
module.exports.addColony = function(createColony, callback){
    CreateColony.create(createColony, callback);
}

