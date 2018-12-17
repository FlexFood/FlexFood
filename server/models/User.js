const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type:String, required:true, unique: true},
  password: String,
  pictureUrl: {type: String, default:"https://res.cloudinary.com/dnuwv52dc/image/upload/v1544448587/react/husband.png"},
  healthLabels: [{type: String, enum: ['alcohol-free','crustacean-free','dairy-free','egg-free','fish-free','gluten-free','kosher','low-potassium','low-sugar','paleo','penaut-free','pescatarian','pork-free','soy-free','sugar-conscisious','tree-nut-free','vegetarian','vegan']}],
  favouriteRecipes: [{ type : Schema.Types.ObjectId, ref: 'Recipe' }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
