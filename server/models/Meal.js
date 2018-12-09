const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const mealSchema = new Schema({
  owner: {type: ObjectId, ref: 'User'},
  mealname: {type:String, default: DataNow()},
  healthLabels: {type: Array, enum: ['alcohol-free','crustacean-free','dairy-free','egg-free','fish-free','gluten-free','kosher','low-potassium','low-sugar','paleo','penaut-free','pescatarian','pork-free','soy-free','sugar-conscisious','tree-nut-free','vegetarian','vegan']},
  dietLabels: {type: Array, enum: ['balanced','high-fiber','high-protein','low-carb','low-fat','low-sodium']},
  recipes: [{ type : ObjectId, ref: 'Recipe' }]
});

const Meal = mongoose.model('Meal', mealSchema);
module.exports = Meal;