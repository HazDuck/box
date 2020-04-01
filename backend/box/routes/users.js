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
  var collection = db.get('orders')
  
  // const data = Object.assign({}, req.body, {howdy: 'hellllo'})
  // console.log(data)


  collection.insert(req.body, 
    function(err, result) {
      res.send(
        (err === null) ? {msg: 'that there did a thing'} : {msg: err}
      )
    }
  )
})

module.exports = router;
