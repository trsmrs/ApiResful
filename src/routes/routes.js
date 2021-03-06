const router = require('express').Router()

const ProductsController = require('../controllers/products')


// VERBOS HTTP ( 4 TIPOS )

// GET - obter dados
router.get('/products/:id?', ProductsController.get)


// POST - enviar/receber dados
 router.post('/products', ProductsController.post)

// PUT - atualizar dados
 router.put('/products/:id', ProductsController.put)

// DELETE - remover dados
 router.delete('/products/:id', ProductsController.remove)






module.exports = router