const express = require('express');
const products = require('../controllers/product.controller');

const router = express.Router();

router.route("/")
    .get(products.findAll)
    .post(products.create)
    .delete(products.deleteAll);

router.route("/category/:type")
    .get(products.findByCategory);

router.route('/favourite')
    .get(products.findAllFavorite);

router.route('/:id')
    .get(products.findOne)
    .put(products.update)
    .delete(products.delete);

module.exports = router;