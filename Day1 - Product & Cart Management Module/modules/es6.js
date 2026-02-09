// ES6 utility module

// Generate random product ID
const generateId = () => {
    return Math.floor(Math.random() * 10000);
};

module.exports = {
    generateId
};
