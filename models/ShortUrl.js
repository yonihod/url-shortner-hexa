const mongoose = require('mongoose');
const ShortUrlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        unique: true,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('ShortUrl', ShortUrlSchema);
