const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

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
router.post('/addorder', [check('delivery').trim().escape()],
  function(req, res) {
    var db = req.db
    var ordersCollection = db.get('orders')
    var productsCollection = db.get('products')
    var data = req.body

    //access the products information and add the correct price to the order from
    //the db
    productsCollection.find({}).then(function(products) {
      var updatedData = products.map(function(product) {
        var ordersToUpdate = data.orders.filter(function(item) {
          return product.id == item.productId
        })
        if (!ordersToUpdate.length > 0) {
          return
        }
        return Object.assign({}, ordersToUpdate[0], {price: product.price})
      })

      var newData = Object.assign({}, data, {
        orders: [...updatedData]
      })
      
      //calculate the total price based on orders, discount and box strength
      function calculateTotalPrice (newData) {
        var isDiscountRequired = newData => newData.orders.map(product => {
          if (!product || !product.quantity) {
            return 0
          }
          return product.quantity
        }).reduce((total, num) => total + num) >= 50 ? true : false
        var discountValue = isDiscountRequired(newData) ? 0.85 : 1
        var totalPrice = newData.orders.map(product => {
          if (!product || !product.price) {
            return 0
          }
          return product.price * product.quantity}).reduce((total, num) => total + num)
        
        // update the newData object
        newData.discount = discountValue
        newData.totalPrice = newData.strength ? (totalPrice * newData.strength)*discountValue : totalPrice*discountValue
        return newData
      }

      return calculateTotalPrice(newData)
  })
  .then(function(updatedData){
    ordersCollection.insert(updatedData, 
      function(err, result) {
        res.send(
          (err === null) ? {
            status: 200,
            msg: 'successfully uploaded order', 
            data: updatedData
          } 
          : 
          {
            status: 500,
            msg: err,
            data: 'no data as an error occured'
          }
        )
      }
    )
  })
  .catch(function(error) {
    console.log(error)
  })
})

module.exports = router;
