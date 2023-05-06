const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rsvpSchema = new Schema({
    userName: {type: Schema.Types.ObjectId, ref: 'User'},
    connectionName: {type: Schema.Types.ObjectId, ref: 'Connection'},
    response: {type: String, enum: ["Yes", "No", "Maybe"], required: true}
});

//collection name is rsvps in NBAD db
module.exports = mongoose.model('Rsvp', rsvpSchema);