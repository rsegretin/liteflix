import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: String,
    base64Cover: String,
    year: String,
    rating: String
});

const userMovie = mongoose.model('userMovie', movieSchema);

export {
    userMovie
};