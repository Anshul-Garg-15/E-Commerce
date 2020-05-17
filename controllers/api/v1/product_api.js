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

