const { updateMany, update } = require('../models/products')
const ProductsModel = require('../models/products')



async function get(req, res){
   const { id } = req.params

    const obj = id ? { _id: id } : null
    const products = await ProductsModel.find(obj)
 
 
    res.send(products)
}


async function post(req, res){
    const {
        name,
        brand,
        price,
    } = req.body

    

const product =  new ProductsModel({
    name,
    brand,
    price,
})

 product.save()

 res.send()
}



async function put(req, res){
    const { id } = req.params

    const product = await ProductsModel.updateMany({ _id: id}, req.body)

    res.send({
        message: 'success',
        product,
    })
    
}


module.exports = {
    get,
    post,
    put,

}