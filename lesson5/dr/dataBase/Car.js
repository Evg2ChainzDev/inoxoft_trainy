
// this is schema
const { Schema, model } = require('mongoose');

const carsSchema = new Schema ({
    brand:{
        type: String,
        required: true,
        trim: true
    },
    model: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: String
    },

}, { timestamps: true });

module.exports = model('cars', carsSchema);
