//import product schema 
const Product = require('../../../model/Products');

module.exports.create = async function(req,res){
    try{
        //create product and store into the db
      let product  =  await Product.create({
            id: req.body.id,
            name: req.body.name,
            quantity: req.body.quantity
        });
         return res.status(200).json({
                data: {
                    product: product
                },
                message:"Product Created!"

            });
    }catch(err){
        return res.status(500).json({
            
            message: "Internal Server Error"
        });
    }
    
}

//render list of products
module.exports.list = async function(req,res){

    let products = await Product.find({});
    
    return res.json(200,{
        message: "List of Products",
        products: products
    });
}

//Delete the product from products list
module.exports.delete = async function(req,res){
    try{
        let product = await Product.findById(req.params.id);
        product.remove();
        
        return res.json(200,{
            message: "Product deleted"
        });
    }catch(err){
        return res.json(500,{
            message: "Internal Server Error"
        });
    }   
}