const createProductMaker = require('./Product');

const createProduct = createProductMaker({ isCurrency });

module.exports = createProduct;

function isCurrency (value) {
    return /^\d+(?:\.\d{0,2})$/.test(value);
}
