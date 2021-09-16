const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    article: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    player: {
        type: String,
        
    },
    user: [{type: Schema.Types.ObjectId, ref: 'users'}],
}, {
    timestamps: true
});
module.exports = mongoose.model('post', postSchema);