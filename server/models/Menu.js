const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const menuSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  menuName: Number, //{type:String, default: Date.now()},
  numberOfDays: String,//Number,
  //healthLabels: [{type: String, enum: ['alcohol-free','crustacean-free','dairy-free','egg-free','fish-free','gluten-free','kosher','low-potassium','low-sugar','paleo','penaut-free','pescatarian','pork-free','soy-free','sugar-conscisious','tree-nut-free','vegetarian','vegan']}],
  // dietLabels: [{type: String, enum: ['balanced','high-fiber','high-protein','low-carb','low-fat','low-sodium']}],
  recipesLunch: Array,
  recipesDinner: Array
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;