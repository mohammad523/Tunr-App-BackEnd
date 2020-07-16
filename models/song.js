const mongoose = require('../db/connection');

const songSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        artist: { type: String, required: true },
        time: { type: Number, required: true },
        isFavorite: { type: Boolean, default: false },
    }
)

const Song = mongoose.model('Song', songSchema)

module.exports = Song