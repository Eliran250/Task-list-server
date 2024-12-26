const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:{
        required: true,
        uniqe: true,
        type: String,
    },
    isCompleted:{
        type: Boolean,
        default: false 
    }
})
module.exports = mongoose.model("Task", taskSchema);