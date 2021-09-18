const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model("User");

const commentSchema = new Schema(
    {
        // user: [{type: Schema.Types.ObjectId, ref: "User"}],
        user: {type: String},
        body: { type: String, required: true }
    },
    {
        timestamps: true,
    }
)

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
    user: [{type: Schema.Types.ObjectId, ref: "User"}],
   
    comments: [ commentSchema ],
 }, {
    timestamps: true
});
module.exports = mongoose.model('Post', postSchema);