const MESSAGES = require('./messages');

const RegisterBox = function RegisterBox(basket = [], total = 0) {
    this.basket = basket;
    this.total = total;
}

RegisterBox.prototype = {
    constructor: RegisterBox,

    addProduct: function registerProduct (product, quantity = 1) {
        this.basket.push({ product, quantity });
        this.displayMessage(MESSAGES.ADD_PRODUCT)
    },

    calculateTotal: function calculateTotal () {
        this.total = this.basket.reduce((total, item) => {
            total += item.product.price * item.quantity;
            return total;
        }, this.total);
    },

    calculateChange: function calculateChange (value) {
        if (value < this.total) this.displayMessage(MESSAGES.INSUFFICIENT_MONEY);
        this.change = value - this.total;
    },

    displayMessage: function displayMessage (message) {
        console.log(message);
    }
}

module.exports = RegisterBox;
