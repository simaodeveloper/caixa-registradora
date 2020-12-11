const createProductMaker = ({ isCurrency }) => {
    const createProduct = ({
        name = '',
        price = 0.00
    } = {}) => {
        if (!name) {
            throw new Error('Product must have a name!');
        }

        if (name.length < 3) {
            throw new Error('Product name must be longer than 3 characters!');
        }

        if (!price) {
            throw new Error('Product price must have value!');
        }

        const priceFixed = price.toFixed(2);
        
        if (!isCurrency(priceFixed)) {
            throw new Error('Product price must be a valid currency!');
        }

        return Object.freeze({
            getName: () => name,
            getPrice: () => priceFixed
        });
    };

    return createProduct;
}

module.exports = createProductMaker;
