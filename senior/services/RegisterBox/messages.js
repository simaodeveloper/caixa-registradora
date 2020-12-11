module.exports = {
    INSUFFICIENT_MONEY: () => 'Please, you have to receive a amout bigger then total value!',
    ADD_PRODUCT: ({ product, quantity } = {}) => `Product ${ product.getName() } Added!`
}