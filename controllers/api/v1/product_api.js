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



//this is my code for query

module.exports.update = function(req,res){
//console.log(req.query);
let number = req.query.number;
console.log(req.query.number); 
 Product.findByIdAndUpdate({_id:req.params.id}, {$inc: {quantity:number }}, {new:true}
                ,function(err, product){
                    if(err){console.log(err)};

                    console.log(product);
                    return res.json(200,{
                        data:{
                            product:product
                        },
            
                        message:"Updated Successfully"
                    });

                   
                });
           
    
         
}

//update the quantity(using params) of product in the list of products
// module.exports.update = function(req,res){
//     Product.findById(req.params.id,function(err,product)
//      {
//         let number = parseInt(req.params.number);
//         let previousQuantity = product.quantity;
//         let newQuantity = number + previousQuantity;
//         console.log(previousQuantity,newQuantity);
//         product.quantity = newQuantity;
//         product.save();
//             return res.json(200,{
//                 data:{
//                     product:product
//                 },
//                 message:"Updated Successfully"
//             });
//    });
        
// }
