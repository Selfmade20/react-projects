const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const computerSchema = new Schema({
    name: { type: String, required: true },
    date : { type : Date, default: Date.now }

}, {
    timestamps: true,
});

const Computers = mongoose.model('Computers', computerSchema);
module.exports = Computers;