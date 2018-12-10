const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type:String, required:true, unique: true},
  password: String,
  pictureUrl: String,
  healthLabels: [{type: String, enum: ['alcohol-free','crustacean-free','dairy-free','egg-free','fish-free','gluten-free','kosher','low-potassium','low-sugar','paleo','penaut-free','pescatarian','pork-free','soy-free','sugar-conscisious','tree-nut-free','vegetarian','vegan']}],
  dietLabels: [{type: String, enum: ['balanced','high-fiber','high-protein','low-carb','low-fat','low-sodium']}],
  meals: [{ type : Schema.Types.ObjectId, ref: 'Meal' }],
  recipes: [{ type : Schema.Types.ObjectId, ref: 'Recipe' }],
  comments: [{ type : Schema.Types.ObjectId, ref: 'Comment' }],
  favouriteRecipes: [{ type : Schema.Types.ObjectId, ref: 'Recipe' }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
