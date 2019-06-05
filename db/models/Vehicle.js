const mongoose = require("../connection");

const VehicleSchema = new mongoose.Schema({
    
})

const Vehicle = mongoose.model("Vehicle", VehicleSchema);

module.exports = Vehicle;