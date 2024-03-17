const mongoose = require('mongoose');

const DatabaseSchema = mongoose.Schema({
    title:{String, require:true},
    description:{String, require:true},
    status:{String, require:true},
}, {versionKey:false, timestamps:true});

const TasksModel = mongoose.model('tasks', DatabaseSchema);

module.exports = TasksModel;