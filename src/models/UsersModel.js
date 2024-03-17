const mongoose = require('mongoose');

const DatabaseSchema = mongoose.Schema({
    email:{String, unique:true, require:true},
    firstName:{String, require:true},
    lastName:{String, require:true},
    mobile:{Number, require:true},
    password:{String, require:true},
}, {versionKey:false, timestamps:true});

const UsersModel = mongoose.model('users', DatabaseSchema);

module.exports = UsersModel;