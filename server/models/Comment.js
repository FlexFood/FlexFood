const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' },
    ratio: Number,
    title: String,
    content: String
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;