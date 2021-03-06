const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    label: String,
    image: String,
    source: { type: String, default: 'FlexFood' },
    yield: Number,
    healthLabels: [{ type: Array, enum: ['alcohol-free', 'crustacean-free', 'dairy-free', 'egg-free', 'fish-free', 'gluten-free', 'kosher', 'low-potassium', 'low-sugar', 'paleo', 'penaut-free', 'pescatarian', 'pork-free', 'soy-free', 'sugar-conscisious', 'tree-nut-free', 'vegetarian', 'vegan']}],
    ingredients: Array,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
    ratio: Number
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;