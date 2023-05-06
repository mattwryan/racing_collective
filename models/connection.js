const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    name: {type: String, required: [true, 'title is required']},
    topic: {type: String, required: [true, 'topic is required']},
    details: {type: String, required: [true, 'details are required']},
    date: {type: Date, required: [true, 'date is required']},
    startTime: {type: String, required: [true, 'start time is required']},
    endTime: {type: String, required: [true, 'end time is required']},
    hostName: {type: Schema.Types.ObjectId, ref: 'User'},
    image: {type: String, required: [true, 'image url is required']},
    location: {type: String, required: [true, 'location is required']},
    rsvpNum: {type: Number, default: 0}
}
);

//collection name is connections in NBAD db
module.exports = mongoose.model('Connection', connectionSchema);



