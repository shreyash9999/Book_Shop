const Product = require('../models/product');




exports.getProduct = (req,res,next) => {
    Product.fethchAll(products => {
        res.render('shop/product_list', 
        {
            prods: products, 
            pageTitle: 'To all Products', 
            path:'/products',
            

        });
    });   
}

exports.getIndex = (req,res) =>{
    Product.fethchAll(products => {
        res.render('shop/index', 
        {
            prods: products, 
            pageTitle: 'My Shop', 
            path:'/shop',

        });
    });   
}

exports.getCart = (req,res) =>{
    res.render('shop/cart',{
        path:'/cart',
        pageTitle: 'Your Cart'
    });
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
      path: '/orders',
      pageTitle: 'Your Orders'
    });
  };
  
  exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
      path: '/checkout',
      pageTitle: 'Checkout'
    });
  };
  