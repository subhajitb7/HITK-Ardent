//Price Calculation
function calculatePrice(price, quantity){
    return price * quantity;
}

//Discount Feature
function applyDiscount(total, discount){
    return total - (total * discount / 100);
}

module.exports = {
    calculatePrice,
    applyDiscount
};
