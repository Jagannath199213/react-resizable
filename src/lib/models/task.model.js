const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    type: String,
    title: String,
    description: String
}, {
    timestamps: true
})

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;