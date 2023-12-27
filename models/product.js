const fs = require('fs');
const path = require('path');

const products = [];

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json'
)

const getProductsFile = cd =>{
    
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            cd([]);
        }else{
            cd(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product { 


    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
      }

    save(){this.id = Math.random().toString();

        getProductsFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err) =>{
                console.log(err);
            });
        })
    }

    static fethchAll(cd){
        getProductsFile(cd);
    }
}