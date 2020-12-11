/* 
    APLICAÇÃO: CAIXA REGISTRADORA

    - REGISTRA OS ITENS E ADICIONA NO CARRINHO DE COMPRAS
    - CALCULA A SOMA DE TODOS OS ITENS
    - CALCULA O TROCO PARA O CLIENTE
*/

const Product = require('./Product');
const RegisterBox = require('./RegisterBox');

const App = {
    start: function() {
        const registerBox = new RegisterBox();
    
        registerBox.addProduct(new Product('banana', 2.99));
        registerBox.addProduct(new Product('maçã', 0.20), 10);
        registerBox.addProduct(new Product('cerveja', 24.00), 2);
    
        registerBox.calculateTotal();
    
        console.log(registerBox.total);

        registerBox.calculateChange();
    }
};

App.start();
