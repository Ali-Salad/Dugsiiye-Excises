import { useState } from 'react';

const PriceCalculator = () => {
    const [price, setPrice] = useState(2.25);
    const [quantity, setQuantity] = useState(1.75);
    const taxRate = 0.09; // ✅ Removed quotes so it's a number, not a string

    const subTotal = price * quantity;
    const total = subTotal * (1 + taxRate);

    const handleReset = () => {
        if (total > 0) {
            setQuantity(0); // ✅ Reset quantity to 0, keeping price at 2.25
        }
    };

    return (
        <div>
            <h2>Product Summary</h2>
            <p>Price: ${price.toFixed(2)} | Quantity: {quantity}</p>
            <p>SubTotal: ${subTotal.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
            
            <button onClick={() => setQuantity(quantity + 1)}>Add item</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default PriceCalculator;
