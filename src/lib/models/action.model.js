const mongoose = require("mongoose");

const actionSchema = new mongoose.Schema(
    {
        type: String,
        action: String,
    }, 
    {
        timestamps: true
    }
)

const ActionSchema = mongoose.model("Action", actionSchema);

module.exports = ActionSchema;