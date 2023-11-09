const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationScheduleSchema = new Schema({
    _schedule_key: {
        type: Number, 
        required: true
    },
    alllines: {
        type: Array,
        required: true
    }
});


const StationSchedule = mongoose.model('stationschedule', stationScheduleSchema);

module.exports = StationSchedule;
