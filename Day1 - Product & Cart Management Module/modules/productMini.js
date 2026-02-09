const { calculatePrice, applyDiscount } = require("./basics");
const { generateId } = require("./es6");

let products = [];
let cart = [];

// Get all products
const getAllProducts = () => products;

// Add product 
const addProduct = (newProduct) => {
    const product = {
        id: generateId(),
        ...newProduct
    };
    products = [...products, product];
    return products;
};

// Search product
const searchProduct = (keyword) => {
    const k = keyword.toLowerCase();
    return products.filter((p) =>
        p.name.toLowerCase().includes(k)
    );
};

// Update product 
const updateProduct = (id, data = {}) => {
    products = products.map((p) =>
        p.id === id ? { ...p, ...data } : p
    );
    return products;
};

// Delete product
const deleteProduct = (id) => {
    products = products.filter((p) => p.id !== id);
    return products;
};

// Add to cart 
const addToCart = (id, quantity) => {
    const product = products.find((p) => p.id === id);
    if (!product || product.stock < quantity) return null;

    product.stock -= quantity;
    cart = [...cart, { ...product, quantity }];
    return cart;
};

// Get cart items
const getCartItems = () => {
    return cart.map(({ name, price }) => ({ name, price }));
};

// Cart total with discount
const calculateCartTotal = (discount = 0) => {
    let total = 0;

    cart.forEach((item) => {
        total += calculatePrice(item.price, item.quantity);
    });

    if (discount > 0) {
        total = applyDiscount(total, discount);
    }
    return total;
};

module.exports = {
    getAllProducts,
    addProduct,
    searchProduct,
    updateProduct,
    deleteProduct,
    addToCart,
    getCartItems,
    calculateCartTotal
};
