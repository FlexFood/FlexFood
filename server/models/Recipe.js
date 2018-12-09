const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    owner: { type: ObjectId, ref: 'User' },
    label: String,
    image: String,
    source: { type: String, default: 'FlexFood' },
    yield: Number,
    dietLabels: { type: Array, enum: ['balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium'] },
    healthLabels: { type: Array, enum: ['alcohol-free', 'crustacean-free', 'dairy-free', 'egg-free', 'fish-free', 'gluten-free', 'kosher', 'low-potassium', 'low-sugar', 'paleo', 'penaut-free', 'pescatarian', 'pork-free', 'soy-free', 'sugar-conscisious', 'tree-nut-free', 'vegetarian', 'vegan'] },
    ingredients: Array,
    comments: [{ type: ObjectId, ref: 'Comment'}],
    ratio: Number
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;