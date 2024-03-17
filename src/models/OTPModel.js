const mongoose = require('mongoose');

const DatabaseSchema = mongoose.Schema({
    email:{String, require:true},
    otp:{String, require:true},
    status:{String, require:true},
}, {versionKey:false, timestamps:true});

const OTPModel = mongoose.model('otps', DatabaseSchema);

module.exports = OTPModel;