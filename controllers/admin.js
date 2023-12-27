const Product = require('../models/product');



exports.getAddProduct = (req,res,next) => {
    res.render('admin/add_product',
    {
        path: '/admin/add_product', 
        pageTitle: 'Add Product'
    });
}

exports.postAddProduct = (req,res,next) => {
    console.log("you are on product page"); 
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    });
  };
  