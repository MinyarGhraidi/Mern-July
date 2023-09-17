const product = require ("../models/product.models")


//!-----------CRUD
//? Read all 


module.exports.findAllProduct = (req,res)=>{
    product.find()
    .then(allProduct =>{
        console.log(allProduct)
        res.json({allProduct})
    })
    .catch(err => { res.json({message:"wait a minute🙂🤗"})})
}
// create one product

module.exports.createProduct = (req,res) =>{
    product.create(req.body).then(newProduct=>{
          console.log("New product", newProduct)
          res.json(newProduct)
      }).catch(err=>{
          console.log(err)
          res.json({error:err})
      })
    }