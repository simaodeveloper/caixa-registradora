const createRegisterBoxMaker = ({ MESSAGES }) => {
    const createRegisterBox = ({
        basket = [],
        total = 0,
    } = {}) => {
        if (!Array.isArray(basket)) {
            throw new Error('RegisterBox must have a basket as array!');
        }

        if (typeof total !== 'number') {
            throw new Error('RegisterBox must have a total as number!');
        }

        const addProduct = (product, quantity = 1) => {
            const item = { product, quantity } ;
            basket.push(item);
            displayMessage(MESSAGES.ADD_PRODUCT(item));
        } ;
    
        const calculateTotal = () => {
            total = basket.reduce((total, item) => {
                return total += parseFloat(item.product.getPrice()) * item.quantity;
            }, total);
        };
    
        const calculateChange = value => {
            if (value < total) displayMessage(MESSAGES.INSUFFICIENT_MONEY());
            change = value - total;
        };
    
        const displayMessage = message => console.log(message);

        return Object.freeze({
            addProduct,
            calculateTotal,
            calculateChange,
            getTotal: () => total
        });
    }

    return createRegisterBox;
}

module.exports = createRegisterBoxMaker;
