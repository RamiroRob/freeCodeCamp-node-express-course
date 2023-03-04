const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trime: true,
        maxlength: [20, "name cannot be more than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("taskSchema", taskSchema)