var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/* GET Articles listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  Article.getArticles(function(err, articles){
    if(err) console.log(err);
    res.json(articles);
  })
});

/* GET Article by ID */
router.get('/:id', function(req, res, next) {
  //res.send('respond with a resource');
  Article.getArticleById(req.params.id, function(err, article){
    if(err) console.log(err);
    res.json(article);
  })
});

/* GET Article by category */
router.get('/category/:category', function(req, res, next) {
  //res.send('respond with a resource');
  Article.getArticleByCategory(req.params.category, function(err, articles){
    if(err) console.log(err);
    res.json(articles);
  })
});

//Post Articles
router.post('/', function(req, res, next) {
  //get form values
  var title = req.body.title;
  var category = req.body.category;
  var body = req.body.body;

  var newArticle = new Article({
    title: title,
    category: category,
    body: body
  });

  // Create New Article
  Article.createArticle(newArticle, function(err, article) {
    if(err) console.log(err);

    res.location('/article');
    res.redirect('/article');
  });
});

//Update Article
router.put('/', function(req, res, next) {
  //get form values
  var id = req.body.id;
  var data = {
   title : req.body.title,
   category : req.body.category,
   body : req.body.body
};
  // Update Article
  Article.updateArticle(id, data, function(err, article) {
    if(err) console.log(err);

    res.location('/article');
    res.redirect('/article');
  });
});

//Delete Article
router.delete('/:id', function(req, res, next) {
  //get id values
  var id = req.params.id;

  Article.removeArticle(id, function(err, article) {
    if(err) console.log(err);

    res.location('/article');
    res.redirect('/article');
  });
});
module.exports = router;
