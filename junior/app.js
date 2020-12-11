/* 
    APLICAÇÃO: CAIXA REGISTRADORA

    - REGISTRA OS ITENS E ADICIONA NO CARRINHO DE COMPRAS
    - CALCULA A SOMA DE TODOS OS ITENS
    - CALCULA O TROCO PARA O CLIENTE
*/

var item = {
    nome: 'banana',
    preco: 2.99,
};

var item2 = {
    nome: 'maçã',
    preco: 0.20,
};

var item3 = {
    nome: 'cerveja',
    preco: 24.00,
};

var caixaRegistradora = {
    cesta: [],
    total: 0,
    registraItem: function( item, quantidade = 1 ) {
        const novoItem = {
            nome: item.nome,
            preco: item.preco,
            quantidade: quantidade
        };

        this.cesta.push(novoItem);

        console.log(`Produto: ${ item.nome } - Preço: ${ item.preco.toFixed(2) } - Quant.: ${ quantidade } - Valor: ${  (item.preco * quantidade).toFixed(2) }`);
    },
    calcularTotal: function() {
        for (let indice = 0; indice < this.cesta.length; indice++) {
            this.total += this.cesta[indice].preco * this.cesta[indice].quantidade;
        }
    },
    calcularTroco(valor) {
        console.log('Troco R$', valor - this.total);
    }
};

function IniciarCompra() {
    console.log('====================================');
    console.log('Caixa Registradora');
    console.log('====================================');
    console.log('');
    caixaRegistradora.registraItem(item)
    caixaRegistradora.registraItem(item2, 10)
    caixaRegistradora.registraItem(item3, 2)
    console.log('');
    console.log('====================================');
    console.log('====================================');
    console.log('');
    caixaRegistradora.calcularTotal();
    console.log(`SubTotal: ${ caixaRegistradora.total }`);
    console.log('====================================');
    console.log('');
    caixaRegistradora.calcularTroco(20);
    console.log('====================================');
}

IniciarCompra();
