const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const amenitiesSchema = new Schema({
    _amenities_key: {
        type: Number, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    free: Boolean, 
    schedule: {
        type: String, 
        required: true
    }
});


const Amenities = mongoose.model('amenities', amenitiesSchema);

module.exports = Amenities;
