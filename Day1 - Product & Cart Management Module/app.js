const miniprod = require("./modules/productMini");

console.log("Product & Cart Management Module");

// Initial products
console.log("\nGet all products (initial):");
console.log(miniprod.getAllProducts());

// Add products
miniprod.addProduct({ name: "Laptop", price: 50000, stock: 5 });
miniprod.addProduct({ name: "Mouse", price: 500, stock: 10 });
miniprod.addProduct({ name: "Keyboard", price: 1500, stock: 3 });

console.log("\nGet all products (after add):");
console.log(miniprod.getAllProducts());

// Search product
console.log("\nSearch product:");
console.log(miniprod.searchProduct("lap"));

// Update product 
const keyboard = miniprod.searchProduct("keyboard")[0];
miniprod.updateProduct(keyboard.id, { price: 1800, stock: 6 });

console.log("\nGet all products (after update):");
console.log(miniprod.getAllProducts());

// Delete product
const mouse = miniprod.searchProduct("mouse")[0];
miniprod.deleteProduct(mouse.id);

console.log("\nGet all products (after delete):");
console.log(miniprod.getAllProducts());

// Add to cart
const laptop = miniprod.searchProduct("laptop")[0];
miniprod.addToCart(laptop.id, 2);
miniprod.addToCart(keyboard.id, 1);

// Show cart 
console.log("\nCart items:");
console.log(miniprod.getCartItems());

// Cart total
console.log("\nCart total:");
console.log(miniprod.calculateCartTotal());

console.log("\nCart total (10% discount):");
console.log(miniprod.calculateCartTotal(10));
