const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    articleName: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    player: {
        type: String,
        required: true
    },
    user: [{type: Schema.Types.ObjectId, ref: 'users'}],
}, {
    timestamps: true
});
module.exports = mongoose.model('post', postSchema);