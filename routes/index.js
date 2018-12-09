var express = require('express');
var router = express.Router();
let {Product}=require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.findAll().then(products=>{
      res.render('index', {products:products});
  });
});

module.exports = router;
