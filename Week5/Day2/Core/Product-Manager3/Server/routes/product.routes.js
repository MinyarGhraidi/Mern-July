const productControllers =require ("../controllers/product.controllers")
console.log(productControllers)


module.exports =(app)=>{
    app.get("/api/product",productControllers.findAllProduct);

    app.post("/api/product",productControllers.createProduct)
}