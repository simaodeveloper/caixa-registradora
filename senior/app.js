/* 
    APLICAÇÃO: CAIXA REGISTRADORA

    - REGISTRA OS ITENS E ADICIONA NO CARRINHO DE COMPRAS
    - CALCULA A SOMA DE TODOS OS ITENS
    - CALCULA O TROCO PARA O CLIENTE
*/

const createProduct = require('./entities/Product');
const createRegisterBox = require('./services/RegisterBox/');

class App {
    static start() {
        const registerBox = createRegisterBox();
    
        registerBox.addProduct(createProduct({ name: 'banana', price: 2.99 }));
        registerBox.addProduct(createProduct({ name: 'maçã', price: 0.20 }), 10);
        registerBox.addProduct(createProduct({ name: 'cerveja', price: 24.00 }), 2);
    
        registerBox.calculateTotal();
    
        console.log(registerBox.getTotal());

        registerBox.calculateChange();
    }
}

App.start();
