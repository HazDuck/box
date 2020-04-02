const express = require('express');
const router = express.Router();

//get products to display on page
router.get('/products', function(req, res) {
  var db = req.db;
  var collection = db.get('products');
  collection.find({
    //can pass in a specific document "name": "bob"
  },{},function(e,docs){
    res.json(docs);
  });
});

// POST required cart data and checkout info to db
router.post('/addorder', function(req, res) {
  var db = req.db
  var ordersCollection = db.get('orders')
  var productsCollection = db.get('products')
  var data = req.body

  //access the products information and add the correct price to the order from
  //the db
  productsCollection.find({})
  .then(function(products) {
    const updatedData = products.map(function(product) {
      var ordersToUpdate = data.orders.filter(function(item) {
        return product.id == item.productId
      })
      if (!ordersToUpdate.length > 0) {
        return
      }
      return Object.assign({}, ordersToUpdate[0], {price: product.price})
    })
    return Object.assign({}, data, {orders: [...updatedData]})
  })
  .then(function(updatedData){
    ordersCollection.insert(updatedData, 
      function(err, result) {
        res.send(
          (err === null) ? {msg: 'that there did a thing'} : {msg: err}
        )
      }
    )
  })
  .catch(function(error) {
    console.log(error)
  })
})

module.exports = router;
