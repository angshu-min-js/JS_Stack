var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  'name': {
    type: String,
    index: true,
    required: true
  },
  'description': {
    type: String
  }
})

var Category = module.exports = mongoose.model('Category', CategorySchema);

// Get all categories
module.exports.getCategories = function(callback) {
  Category.find(callback);
}

// Get category by ID
module.exports.getCategoryById = function(id, callback) {
  Category.findById(id, callback);
}

// Get category categorys
module.exports.getArticlesByCategory = function(category, callback) {
  var query = {category: category};
  Category.find(query, callback);
}

//New Category
module.exports.createCategory = function(newCat, callback) {
  newCat.save(callback);
}
