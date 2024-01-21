/*Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.*/


// Original object with item prices in USD
const itemPricesUSD = {
    laptop: 1200,
    smartphone: 800,
    headphones: 100,
    camera: 500,
};

// Function to convert prices to Indian Rupees
function convertToINR(priceUSD) {
    const exchangeRate = 80;
    return priceUSD * exchangeRate;
}

// Using the map higher-order function to create a new object with prices in INR
const itemPricesINR = Object.fromEntries(
    Object.entries(itemPricesUSD).map(([item, priceUSD]) => [item, convertToINR(priceUSD)])
);

// Display the original and converted prices
console.log("Original Prices (USD):", itemPricesUSD);
console.log("Converted Prices (INR):", itemPricesINR);
