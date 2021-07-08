const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
    name: String,
    caption: String,
    url: String
});

module.exports = mongoose.model('Meme', MemeSchema);