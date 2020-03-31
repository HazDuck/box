var express = require('express');
var router = express.Router();

/* GET products. */
router.get('/products', function(req, res) {
  var db = req.db;
  var collection = db.get('products');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

// POST required cart data and checkout info to db
router.post('/addorder', function(req, res) {
  var db = req.db
  var collection = db.get('products')
  //get the products id and quantity
  // var products = req.body.products
  collection.insert(req.body, 
    function(err, result) {
      res.send(
        (err === null) ? {msg: 'that there did a thing'} : {msg: err}
      )
    }
  )
})

module.exports = router;
