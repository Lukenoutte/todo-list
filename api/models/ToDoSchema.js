const mongoose = require('mongoose');

ToDoSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ToDo', ToDoSchema);