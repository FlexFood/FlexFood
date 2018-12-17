const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const mealSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  mealname: {type:String, default: Date.now()},
  numberOfDays: Number,
  healthLabels: [{type: String, enum: ['alcohol-free','crustacean-free','dairy-free','egg-free','fish-free','gluten-free','kosher','low-potassium','low-sugar','paleo','penaut-free','pescatarian','pork-free','soy-free','sugar-conscisious','tree-nut-free','vegetarian','vegan']}],
  recipes: [{ type : Schema.Types.ObjectId, ref: 'Recipe' }]
});

const Meal = mongoose.model('Meal', mealSchema);
module.exports = Meal;