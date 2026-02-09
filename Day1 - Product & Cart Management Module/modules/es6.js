// ES6 utility module

// Generate random product ID
const generateId = () => {
    return Math.floor(Math.random() * 10000);
};

// Format product output
const formatProduct = ({ id, name, price, stock }) => {
    return `ID: ${id} | Name: ${name} | Price: ₹${price} | Stock: ${stock}`;
};

module.exports = {
    generateId,
    formatProduct
};
