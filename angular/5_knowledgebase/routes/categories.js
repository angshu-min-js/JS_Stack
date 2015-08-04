var express = require('express');
var router = express.Router();
var Category = require('../models/category');

/* GET Categories listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  Category.getCategories(function(err, categories){
    if(err) console.log(err);
    res.json(categories);
  })
});

/*  GET Category by ID */
router.get('/:id', function(req, res, next) {
  //res.send('respond with a resource');
  Category.getCategoryById(req.params.id, function(err, category){
    if(err) console.log(err);
    res.json(category);
  })
});

/*  Create Category
route.get('', function(req, res, next){

})
*/

module.exports = router;
